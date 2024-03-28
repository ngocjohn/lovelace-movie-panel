import { MovieAppPanel } from './movie-panel';

// Registering the custom element
customElements.define('movie-app-panel', MovieAppPanel);
console.info('%c 📻 Movie App Panel ', 'background: #222; color: #bada55');

window.customCards = window.customCards || [];
window.customCards.push({
  preview: false,
  type: 'movie-app-panel',
  name: 'Movie App Panel',
});
