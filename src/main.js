import { LitElement, html } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import combinedStyles from './css/styles.js';
import { SearchMixin } from './helpers/search.js';
import { ActionsHandler } from './helpers/actions.js';
import { SEARCH_API, IMG_PATH, API_URL, URL_PATH } from './helpers/apiTmdb.js';
import { getResults } from './helpers/apiTmdb.js';

import { loadCSS, noImage } from './helpers/const.js';

class MovieAppPanel extends ActionsHandler(SearchMixin(LitElement)) {
  _hass;
  _upcomingState;
  _kodiState;
  static get properties() {
    return {
      _entity: { state: true },
      _upcoming: { state: true },
      cinemaMovies: { type: Array },
      kodiMovies: { type: Array },
      upcomingMovies: { type: Array },
      search: { type: String },
      searchResults: { type: Array },
      isSearchActive: { type: Boolean },
    };
  }

  static get styles() {
    return [combinedStyles];
  }

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
    this.getUpcomingMovies();
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
    if (this._kodiState) {
      // Fetch Kodi movies after entity state is updated
      this.getKodiMovies();
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

  updated(changedProperties) {
    super.updated(changedProperties);
    // Check if the relevant property has changed
    if (
      changedProperties.has('cinemaMovies') ||
      changedProperties.has('upcomingMovies') ||
      changedProperties.has('kodiMovies')
    ) {
      // console.log('bentoGrid');
      this.createBentoGrid();
    }
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

  async getUpcomingMovies() {
    try {
      const movies = await getResults();
      this.upcomingMovies = movies;
      this.requestUpdate(); // Forces update
      // console.log(movies);
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
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

    let moviePath;

    if (useKodiData) {
      // For Kodi movies
      moviePath = isLarge
        ? movie.fanart_url || noImage
        : movie.poster_url || noImage;
    } else {
      // For non-Kodi movies
      if (isLarge) {
        moviePath = movie.backdrop_path
          ? this.IMG_PATH + movie.backdrop_path
          : movie.poster_path
          ? this.IMG_PATH + movie.poster_path
          : noImage;
      } else {
        moviePath = movie.poster_path
          ? this.IMG_PATH + movie.poster_path
          : noImage;
      }
    }
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
            ${useKodiData
              ? html`<button
                  class="watch-now"
                  @click="${() => this._playMovie(movieStreamUrl)}"
                >
                  Watch now
                </button>`
              : ''}

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
    // console.log(`Rendering with active section: ${this.currentActiveSection}`);
    return html`
      <div class="header">
        <ul>
          ${this.renderNavLink('kodi-movies', 'Kodi')}
          ${this.renderNavLink('upcoming-movies', 'Cinema')}
          ${this.renderNavLink('tmdb-movies', 'Popular')}
        </ul>
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
                [{ title: 'In cinemas' }, { title: 'Movies' }]
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

// Registering the custom element
customElements.define('movie-app-panel', MovieAppPanel);
console.info('%c 📻 Movie App Panel ', 'background: #222; color: #bada55');

window.customCards = window.customCards || [];
window.customCards.push({
  preview: false,
  type: 'movie-app-panel',
  name: 'Movie App Panel',
});
