import { LitElement, html, nothing } from 'lit';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './styles';
import mediaquerystyles from './mediaquerystyles';
import dialogcss from './dialogcss.js';

import { mdiMagnify, mdiClose, mdiAlertCircleOutline } from '@mdi/js';
import { SEARCH_API, IMG_PATH, API_URL, URL_PATH } from './helpers.js';
import { loadCSS, noImage } from './const.js';

export class MovieAppPanel extends LitElement {
  _hass;
  static get properties() {
    return {
      _entity: { state: true },
      _upcoming: { state: true },
      _kodiState: { state: true },
      _upcomingState: { state: true },
      movies: { type: Array },
      kodiMovies: { type: Array },
      upcomingMovies: { type: Array },
      search: { type: String },
      searchResults: { type: Array },
      isSearchActive: { type: Boolean },
    };
  }
  static styles = [styles, mediaquerystyles, dialogcss];

  constructor() {
    super();
    loadCSS();
    this.boundHandleScroll = this.handleScroll.bind(this);
    this.cinemaMovies = [];
    this.kodiMovies = [];
    this.upcomingMovies = [];
    this.search = '';
    this.searchResults = [];
    this.isSearchActive = false;
    this.searchTimeout = null;
    this.API_URL = `${API_URL}`;
    this.IMG_PATH = `${IMG_PATH}`;
    this.URL_PATH = `${URL_PATH}`;
    this.SEARCH_API = `${SEARCH_API}`;
    this.getCinemaMovies(this.API_URL);
  }

  // Method to set configuration
  setConfig(config) {
    this._entity = config.entity;
    this._upcoming = config.upcoming;
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  /**
   * @param {{ states: { [x: string]: any; }; callService: (arg0: string, arg1: string, arg2: { file: any; }) => void; }} hass
   */
  set hass(hass) {
    this._hass = hass;
    this._kodiState = hass.states[this._entity];
    this._upcomingState = hass.states[this._upcoming];
    if (this._kodiState) {
      // Fetch Kodi movies after entity state is updated
      this.getKodiMovies();
    }
    if (this._upcomingState) {
      this.getUpcomingMovies();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.boundHandleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.boundHandleScroll);
    super.disconnectedCallback();
  }

  /* ------------------------------ FETCH MOVIES ------------------------------ */
  async getCinemaMovies(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      this.cinemaMovies = data.results;
      this.requestUpdate(); // Forces update
      // console.log(this.cinemaMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  getKodiMovies() {
    if (
      this._kodiState &&
      this._kodiState.attributes &&
      this._kodiState.attributes.data
    ) {
      let data = this._kodiState.attributes.data;
      this.kodiMovies = data;
    } else {
      console.error('Kodi Movies data is not available.');
    }
  }

  getUpcomingMovies() {
    if (
      this._upcomingState &&
      this._upcomingState.attributes &&
      this._upcomingState.attributes.data
    ) {
      let data = this._upcomingState.attributes.data;
      this.upcomingMovies = data;
    } else {
      console.error('Upcoming Movies data is not available.');
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                               RENDER SECTIONS                              */
  /* -------------------------------------------------------------------------- */

  renderMovie(movie, options = {}) {
    const { isLarge = false, useKodiData = false } = options;

    const movieClass = isLarge ? 'movie-l' : 'movie-s';
    const movieTitle = movie.title;
    const movieRating = useKodiData ? movie.rating : movie.vote_average;
    const moviePlot = useKodiData ? movie.plot : movie.overview;
    const movieURL = useKodiData ? movie.tmdb_link : this.URL_PATH + movie.id;
    const movieStreamUrl = useKodiData ? movie.strm_url : '';

    let moviePath = useKodiData
      ? isLarge
        ? movie.fanart_url || movie.poster_url || noImage
        : movie.poster_url || noImage
      : this.IMG_PATH + (isLarge ? movie.backdrop_path : movie.poster_path);

    let ratingGradient = '#0000007d'; // default
    if (movieRating >= 8) ratingGradient = '#008704';
    else if (movieRating >= 6.5) ratingGradient = '#8a5200';

    const ratingGradientBg = {
      background: `linear-gradient(15deg, #bbbbbb 0%, ${ratingGradient} 40%)`,
    };

    return html`
      <div class="${movieClass}">
        <img src="${moviePath}" alt="${movieTitle}" />
        <div class="movie-info">
          ${!isLarge && movieRating
            ? html`<h3>${movieTitle}</h3>
                <span class="vote" style=${styleMap(ratingGradientBg)}
                  >⭐ ${movieRating.toFixed(1)}</span
                >`
            : !movieRating
            ? html`<h3>${movieTitle}</h3>`
            : ''}
        </div>
        <div class="overview ${!isLarge ? 'hidden' : 'visible'}">
          <h3>${movieTitle}</h3>
          <p>${moviePlot}</p>
          <div class="buttons">
            <button
              class="watch-now"
              @click="${() => this._playMovie(movieStreamUrl)}"
            >
              Watch now
            </button>
            <button
              class="watch-later"
              @click="${() => this._openPopup(movieURL)}"
            >
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderMovieSections(sectionId, movies, subsections, useKodiData = false) {
    return html`
      <section id="${sectionId}" class="inner_content">
        ${subsections.map(({ title, id }, index) => {
          const sectionMovies =
            index === 0 ? movies.slice(0, 5) : movies.slice(5);
          const displayedMovies = sectionMovies.map((movie) =>
            this.renderMovie(movie, { isLarge: index === 0, useKodiData })
          );
          const containerClass =
            index === 0 ? 'horizontal-list' : 'items-container';

          return html`
            <div id="${id}" class="subsection">
              <h2 id="subsection-title">${title}</h2>
              <div class="${containerClass}">${displayedMovies}</div>
            </div>
          `;
        })}
      </section>
    `;
  }

  renderSearchResults() {
    // Render the current or last search results
    return html`
      <div class="searched">
        ${this.searchResults.map((movie) =>
          this.renderMovie(movie, false, false)
        )}
      </div>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /*                              MAIN PAGE RENDER                              */
  /* -------------------------------------------------------------------------- */

  render() {
    // console.log('Rendering component...');
    return html`
      <div class="header">
        <nav>
          <a
            href="#kodi-movies"
            data-target="kodi-movies"
            @click="${this.scrollToSection}"
            ><h1>Kodi</h1></a
          >
          <a
            href="#upcoming-movies"
            data-target="upcoming-movies"
            @click="${this.scrollToSection}"
            ><h1>Cinema</h1></a
          >
          <a
            href="#tmdb-movies"
            data-target="tmdb-movies"
            @click="${this.scrollToSection}"
            ><h1>Popular</h1></a
          >
        </nav>
        ${this.renderSearchForm()}
      </div>
      <main>
        ${!this.isSearchActive
          ? html`
              ${this.renderMovieSections(
                'kodi-movies',
                this.kodiMovies,
                [{ title: 'Recently added' }, { title: 'Kodi library' }],
                true
              )}
              ${this.renderMovieSections(
                'upcoming-movies',
                this.upcomingMovies,
                [{ title: 'In cinemas' }, { title: 'Movies' }],
                true
              )}
              ${this.renderMovieSections('tmdb-movies', this.cinemaMovies, [
                { title: 'Most Popular' },
                { title: 'Recommended for you' },
              ])}
            `
          : html`<section id="search-results" class="inner_content">
              ${this.renderSearchResults()}
            </section>`}
      </main>
      ${this.renderToast()}
      <dialog id="popup-dialog"></dialog>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /*                               ACTIONS HANDLER                              */
  /* -------------------------------------------------------------------------- */

  scrollToSection(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    const targetId = event.currentTarget.getAttribute('href'); // Get the hash value
    const section = this.shadowRoot.querySelector(`${targetId}`); // Get the corresponding section
    const headerHeight = this.shadowRoot.querySelector('.header').offsetHeight; // Get header height
    if (section) {
      // Calculate the target scroll position considering the header height
      const targetScrollPosition =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;
      // Scroll to the target position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    }
  }

  handleScroll() {
    const sections = this.shadowRoot.querySelectorAll('section');
    const mainElement = this.shadowRoot.querySelector('main');
    const headerElement = this.shadowRoot.querySelector('.header');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      // Check if the section is at least partially visible in the viewport
      const isVisible =
        rect.bottom > headerElement.offsetHeight &&
        rect.top <
          (window.innerHeight || document.documentElement.clientHeight) - 56;

      if (isVisible) {
        // Change the background color based on odd or even index
        if (index % 2 === 0) {
          mainElement.style.backgroundColor = 'var(--primary-color)';
          headerElement.style.backgroundColor =
            'var(--app-header-background-color)';
        } else {
          mainElement.style.backgroundColor = 'var(--secondary-bg-color)';
          headerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }

        // Exit the loop once a visible section is found
        return;
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                POPUP DIALOG                                */
  /* -------------------------------------------------------------------------- */

  // Method to open the more info dialog

  _openPopup(content) {
    const dialog = this.shadowRoot.querySelector('#popup-dialog');

    if (typeof content === 'string') {
      // Check if content is a URL for an iframe
      if (content.startsWith('http') || content.startsWith('www')) {
        dialog.innerHTML = `
        <span class="close">&times;</span>
        <div class="popup-content">
          <iframe src="${content}" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      `;
      } else {
        // Plain text or HTML string
        dialog.innerHTML = `
        <span class="close">&times;</span>
        <div class="popup-content">${content}</div>
      `;
      }
    }

    dialog.showModal();
    const closeButton = dialog.querySelector('.close');
    closeButton.addEventListener('click', () => this._closePopup());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        this._closePopup();
      }
    });
  }

  _closePopup() {
    const dialog = this.shadowRoot.querySelector('#popup-dialog');
    dialog.close();
  }

  /* ---------------------------- TOAST NOTIFICATION --------------------------- */
  renderToast() {
    return html`
      <div id="toast">
        <div id="img">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Error">
            <path d="${mdiAlertCircleOutline}" />
          </svg>
        </div>
        <div id="desc">asdasdada asdasdasd asd asd</div>
      </div>
    `;
  }

  launch_toast(desc) {
    const toastEl = this.shadowRoot.querySelector('#toast');
    const descEl = this.shadowRoot.querySelector('#desc');

    if (toastEl) {
      descEl.innerHTML = desc;
      toastEl.classList.add('show');
      setTimeout(() => {
        toastEl.classList.remove('show');
      }, 5000);
    } else {
      console.error('Toast element not found');
    }
  }
  /* ------------------------- PLAY MOVIE CALLSERVICE ------------------------- */

  _playMovie(strm_url) {
    this._hass.callService('script', 'run_plugin', {
      file: strm_url,
    });
  }

  /* ------------------------------ SEARCH HANDLE ----------------------------- */

  renderSearchForm() {
    return html`
      <div class="search-container">
        ${this.search.length > 0
          ? html` <svg
              class="reset-icon"
              @click="${this.resetSearch}"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-label="Reset search"
            >
              <path d="${mdiClose}" />
            </svg>`
          : html` <svg
              class="search-icon"
              @click="${(event) => this.manageSearchInputVisibility(event)}"
              @mouseover="${(event) => this.manageSearchInputVisibility(event)}"
              @mouseout="${(event) => this.manageSearchInputVisibility(event)}"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-label="Search"
            >
              <path d="${mdiMagnify}" />
            </svg>`}
        <form id="form" @submit="${this.performSearch}" class="hidden">
          <input
            type="text"
            .value="${this.search}"
            @input="${this.updateSearch}"
            class="search-input"
            placeholder="Search..."
          />
        </form>
      </div>
    `;
  }

  updateSearch(e) {
    this.search = e.target.value;
  }

  async performSearch(e) {
    e.preventDefault();
    const searchTerm = this.search.trim();

    if (searchTerm) {
      try {
        const response = await fetch(`${this.SEARCH_API}${searchTerm}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          this.searchResults = data.results;
          this.isSearchActive = true;
        } else {
          // If the new search has no results, use last successful results if available
          this.searchResults.length === 0;
          const template = `No results found for '${searchTerm}'.`;
          this.launch_toast(template);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      this.isSearchActive = false;
      this.searchResults = []; // Clear results if search term is empty
    }
    this.requestUpdate();
  }

  manageSearchInputVisibility(event) {
    const formEl = this.shadowRoot.querySelector('#form');
    if (!formEl) return;

    clearTimeout(this.searchTimeout); // Clear any existing timeout

    // Handle the click event specifically
    if (event.type === 'click') {
      formEl.classList.toggle('show');
      return; // Exit the function after handling click
    }

    // Handle mouseover and mouseout for empty search
    if (this.search.trim().length === 0) {
      if (!formEl.classList.contains('show') && event.type === 'mouseover') {
        // Show the input after a delay if it's not already shown
        this.searchTimeout = setTimeout(() => {
          if (this.search.trim().length === 0) {
            formEl.classList.add('show');
          }
        }, 1000);
      } else if (
        formEl.classList.contains('show') &&
        event.type === 'mouseout'
      ) {
        // Hide the input after a delay if still no search term
        this.searchTimeout = setTimeout(() => {
          if (this.search.trim().length === 0) {
            formEl.classList.remove('show');
          }
        }, 7000);
      }
    }
  }

  resetSearch() {
    this.search = '';
    this.shadowRoot.querySelector('#form').classList.remove('show');
    this.isSearchActive = false;
    // Fetch default content or reset
    this.getCinemaMovies(this.API_URL);
  }

  static getStubConfig() {
    return {
      entity: 'sensor.kodi_all_movies',
      upcoming: 'sensor.upcoming_all_movies',
    };
  }
}
