import { LitElement, html } from 'lit';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './css/mainstyles.js';
import mediaquerystyles from './css/mediaquerystyles.js';
import dialogcss from './css/dialogcss.js';

import { SearchMixin } from './helpers/search.js';
import { ActionsHandler } from './helpers/actions.js';
import { SEARCH_API, IMG_PATH, API_URL, URL_PATH } from './helpers/apiTmdb.js';
import { loadCSS, noImage } from './helpers/const.js';

export class MovieAppPanel extends ActionsHandler(SearchMixin(LitElement)) {
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
      currentActiveSection: { type: String },
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
    this.updateNavOnLoad();
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

  renderNavLink(linkId, title) {
    const isActive = this.currentActiveSection === linkId;
    return html`
      <li>
        <a
          href="#${linkId}"
          data-target="${linkId}"
          @click="${this.scrollToSection}"
          class="${isActive ? 'active' : ''}"
          >${title}</a
        >
      </li>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /*                              MAIN PAGE RENDER                              */
  /* -------------------------------------------------------------------------- */

  render() {
    console.log(`Rendering with active section: ${this.currentActiveSection}`);
    return html`
      <ul class="header">
        ${this.renderNavLink('kodi-movies', 'Kodi')}
        ${this.renderNavLink('upcoming-movies', 'Cinema')}
        ${this.renderNavLink('tmdb-movies', 'Popular')}
        ${this.renderSearchForm()}
      </ul>
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
        ${this.renderToast()}
        <dialog id="popup-dialog"></dialog>
      </main>
    `;
  }

  static getStubConfig() {
    return {
      entity: 'sensor.kodi_all_movies',
      upcoming: 'sensor.upcoming_all_movies',
    };
  }
}
