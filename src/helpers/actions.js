import { mdiCloseCircle } from '@mdi/js';

export const ActionsHandler = (Superclass) =>
  class extends Superclass {
    /* -------------------------------------------------------------------------- */
    /*                               ACTIONS HANDLER                              */
    /* -------------------------------------------------------------------------- */
    scrollToSection(event) {
      event.preventDefault(); // Prevent default behavior of anchor tag
      const targetId = event.currentTarget.getAttribute('href'); // Get the hash value
      const section = this.shadowRoot.querySelector(`${targetId}`); // Get the corresponding section
      const headerHeight =
        this.shadowRoot.querySelector('.header').offsetHeight; // Get header height
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
      const navLinks = this.shadowRoot.querySelectorAll('.header li a');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is at least partially visible in the viewport
        const isVisible =
          rect.bottom > headerElement.offsetHeight &&
          rect.top <
            (window.innerHeight || document.documentElement.clientHeight) - 56;

        if (isVisible) {
          // console.log(`Visible section ID: ${section.id}`); // Debug log
          // // Change the background color based on odd or even index
          if (index % 2 === 0) {
            mainElement.style.backgroundColor = 'var(--primary-color)';
          } else {
            mainElement.style.backgroundColor = 'var(--secondary-bg-color)';
          }
          // Update navigation link styles
          navLinks.forEach((link) => {
            if (link.getAttribute('data-target') === section.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          // Exit the loop once a visible section is found
          return;
        }
      });
    }
    updateNavOnLoad() {
      const sections = this.shadowRoot.querySelectorAll('section');
      const navLinks = this.shadowRoot.querySelectorAll('.header li a');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is at least partially visible in the viewport on load
        if (index === 0) {
          // Assuming the first section should be active initially
          navLinks.forEach((link) => {
            if (link.getAttribute('data-target') === section.id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
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
          <svg class="close"  width="24" height="24" viewBox="0 0 24 24">
            <path d="${mdiCloseCircle}" />
          </svg>
        <div class="popup-content">
          <iframe src="${content}" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      `;
        } else {
          // Plain text or HTML string
          dialog.innerHTML = `
          <svg class="close"  width="24" height="24" viewBox="0 0 24 24">
            <path d="${mdiCloseCircle}" />
          </svg>
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

    /* ------------------------- PLAY MOVIE CALLSERVICE ------------------------- */

    _playMovie(strm_url) {
      this._hass.callService('script', 'run_plugin', {
        file: strm_url,
      });
    }
  };
