import { LitElement, html, nothing } from 'lit';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './styles';
import mediaquerystyles from './mediaquerystyles';
import dialogcss from './dialogcss.js';

import { mdiMagnify, mdiClose } from '@mdi/js';

import { SEARCH_API, IMG_PATH, API_URL, URL_PATH, loadCSS } from './helpers.js';

export class MovieAppPanel extends LitElement {
  _hass;
  static get properties() {
    return {
      _entity: { state: true },
      _name: { state: true },
      _state: { state: true },
      _status: { state: true },
      movies: { type: Array },
      kodiMovies: { type: Array },
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
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  /**
   * @param {{ states: { [x: string]: any; }; callService: (arg0: string, arg1: string, arg2: { file: any; }) => void; }} hass
   */
  set hass(hass) {
    this._hass = hass;
    this._state = hass.states[this._entity];
    if (this._state) {
      this._status = this._state.state;
      let fn = this._state.attributes.friendly_name;
      this._name = fn ? fn : this._entity;
      // Fetch Kodi movies after entity state is updated
      this.getKodiMovies();
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
    if (this._state && this._state.attributes && this._state.attributes.data) {
      let data = this._state.attributes.data;
      this.kodiMovies = data;
    } else {
      console.error('Kodi Movies data is not available.');
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                               RENDER SECTIONS                              */
  /* -------------------------------------------------------------------------- */

  renderMovie(movie, isMostPopular, isKodiMovie = false) {
    const debug = false;
    const movieClass = isMostPopular ? 'movie-l' : 'movie-s';
    const movieTitle = isKodiMovie ? movie.title : movie.title;
    const movieRating = isKodiMovie ? movie.rating : movie.vote_average;
    const moviePlot = isKodiMovie ? movie.plot : movie.overview;
    const movieURL = isKodiMovie ? movie.tmdb_link : this.URL_PATH + movie.id;
    const movieStreamUrl = isKodiMovie ? movie.strm_url : '';
    // console.log(movieStreamUrl);
    let moviePath;
    if (isKodiMovie) {
      if (isMostPopular) {
        // Use fanart_url, but if it's falsy (undefined, null, empty string, etc.), fallback to poster_url
        moviePath = movie.fanart_url ? movie.fanart_url : movie.poster_url;
      } else {
        moviePath = movie.poster_url;
      }
    } else {
      moviePath =
        this.IMG_PATH +
        (isMostPopular ? movie.backdrop_path : movie.poster_path);
    }

    let ratingGradient;
    if (movieRating >= 8 && movieRating <= 10) {
      ratingGradient = `#008704`;
    } else if (movieRating >= 6.5 && movieRating < 8) {
      ratingGradient = `#8a5200`;
    } else {
      ratingGradient = `#0000007d`;
    }

    const ratingGradientBg = {
      background: `linear-gradient(15deg, #bbbbbb 0%, ${ratingGradient} 40%)`,
    };

    if (debug) {
      console.log(
        `%cMovie rating: ${movieRating} Rating gradient color: ${ratingGradient}`,
        `color: white; background: ${ratingGradient}`
      );
    }

    return html`
      <div class="${movieClass}">
        <img src="${moviePath}" alt="${movieTitle}" />
        <div class="movie-info">
          ${!isMostPopular && movieRating
            ? html`<h3>${movieTitle}</h3>
                <span class="vote" style=${styleMap(ratingGradientBg)}
                  >⭐ ${movieRating.toFixed(1)}</span
                >`
            : !movieRating
            ? html`<h3>${movieTitle}</h3>`
            : ''}
        </div>
        <div class="overview ${!isMostPopular ? 'hidden' : 'visible'}">
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

  renderMovies() {
    const mostPopularMovies = this.cinemaMovies
      .slice(0, 5)
      .map((movie) => this.renderMovie(movie, true));
    const recommendedMovies = this.cinemaMovies
      .slice(5)
      .map((movie) => this.renderMovie(movie, false));

    return html`
      <div class="horizontal-header">
        <h2>Most Popular</h2>
        <div class="horizontal-list">${mostPopularMovies}</div>
      </div>
      <div class="horizontal-header">
        <h2>Recommended for you</h2>
        <div class="items-container">${recommendedMovies}</div>
      </div>
    `;
  }

  renderKodiMovies() {
    const mostPopularKodiMovies = this.kodiMovies
      .slice(0, 7)
      .map((movie) => this.renderMovie(movie, true, true));
    const recommendedKodiMovies = this.kodiMovies
      .slice(7)
      .map((movie) => this.renderMovie(movie, false, true));

    return html`
      <div class="horizontal-header">
        <h2>Recently added</h2>
        <div class="horizontal-list">${mostPopularKodiMovies}</div>
      </div>
      <div class="horizontal-header">
        <h2>Kodi library</h2>
        <div class="items-container">${recommendedKodiMovies}</div>
      </div>
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
          <a href="#" data-target="kodi-movies" @click="${this.scrollToSection}"
            ><h1>Kodi</h1></a
          >
          <a href="#" data-target="tmdb-movies" @click="${this.scrollToSection}"
            ><h1>Cinema</h1></a
          >
        </nav>
        ${this.renderSearchForm()}
      </div>
      <main>
        ${!this.isSearchActive
          ? html` <section id="kodi-movies" class="inner_content">
                ${this.renderKodiMovies()}
              </section>
              <section id="tmdb-movies" class="inner_content">
                ${this.renderMovies()}
              </section>`
          : html`<section id="search-results" class="inner_content">
              ${this.renderSearchResults()}
            </section>`}

        <div id="toast">
          <div id="img">I</div>
          <div id="desc">A notification message..</div>
        </div>
        <dialog id="popup-dialog"></dialog>
      </main>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /*                               ACTIONS HANDLER                              */
  /* -------------------------------------------------------------------------- */

  scrollToSection(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    const targetId = event.currentTarget.getAttribute('data-target'); // Get the hash value
    const section = this.shadowRoot.querySelector(`#${targetId}`); // Get the corresponding section
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
    // console.log('Scrolling....');

    const sections = this.shadowRoot.querySelectorAll('.inner_content');
    const mainElement = this.shadowRoot.querySelector('main');
    const headerElement = this.shadowRoot.querySelector('.header');
    let isPrimarySectionAtTop = false;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      // Check if the top of the section is near the top of the viewport
      if (rect.top >= 0 && rect.top <= headerElement.offsetHeight) {
        isPrimarySectionAtTop = index % 2 === 0;
      }
      // console.log('top:', rect.top, 'header:', headerElement.offsetHeight);
    });
    // console.log(isPrimarySectionAtTop);

    // Apply the background color to the main element based on the section index
    mainElement.style.backgroundColor = isPrimarySectionAtTop
      ? 'var(--primary-color)'
      : 'var(--secondary-bg-color)';

    // Change header background color when a primary-colored section is at the top
    headerElement.style.backgroundColor = isPrimarySectionAtTop
      ? 'var(--app-header-background-color)'
      : 'rgba(0, 0, 0, 0.5)';
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

  /* ---------------------------- TOST NOTIFICATION --------------------------- */

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
              @click="${this.toggleSearchInput}"
              @mouseover="${this.toggleSearchInputWithDelay}"
              @mouseout="${this.hideSearchInputWithDelay}"
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
          const template = `No results found for '${searchTerm}'. Please try a different search.`;
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

  toggleSearchInput() {
    if (this.search.length === 0) {
      this.shadowRoot.querySelector('#form').classList.toggle('show');
    }
  }

  // Method to show the input with delay
  toggleSearchInputWithDelay() {
    const formEl = this.shadowRoot.querySelector('#form');
    clearTimeout(this.searchTimeout); // Clear any existing timeout

    this.searchTimeout = setTimeout(() => {
      if (formEl && !formEl.classList.contains('show')) {
        formEl.classList.add('show');
      }
    }, 1000);
  }

  // Method to hide the input with delay
  hideSearchInputWithDelay() {
    const formEl = this.shadowRoot.querySelector('#form');
    clearTimeout(this.searchTimeout); // Clear any existing timeout

    this.searchTimeout = setTimeout(() => {
      if (
        formEl &&
        this.search.trim().length === 0 &&
        formEl.classList.contains('show')
      ) {
        formEl.classList.remove('show');
      }
    }, 5000);
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
    };
  }
}
