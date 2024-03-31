import { mdiMagnify, mdiClose, mdiAlertCircleOutline } from '@mdi/js';
import { html } from 'lit';

export const SearchMixin = (superclass) =>
  class extends superclass {
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
                @mouseover="${(event) =>
                  this.manageSearchInputVisibility(event)}"
                @mouseout="${(event) =>
                  this.manageSearchInputVisibility(event)}"
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

    /* ---------------------------- TOAST NOTIFICATION --------------------------- */
    renderToast() {
      return html`
        <div id="toast">
          <div id="img">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Error">
              <path d="${mdiAlertCircleOutline}" />
            </svg>
          </div>
          <div id="desc">Notification search results</div>
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
  };
