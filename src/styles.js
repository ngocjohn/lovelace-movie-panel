import { css } from 'lit';

export default css`
  :host {
    --primary-color: #181625;
    --secondary-bg-color: #373258;
    --secondary-color: #403c55;
    --accent-color: rgb(146, 144, 195);
    --maxPrimarySectionWidth: 85vw;
  }
  * {
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin: 0;
    overflow: hidden;
  }
	@media (max-width: 768px) {
		.header {
			padding: 1rem 1rem 1rem 1rem !important;
		}
	}
  .header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding: 1rem 70px;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: var(--primary-color);
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur(15px) brightness(0.7);
    transition: background-color 0.5s ease;
    z-index: 5;
    height: auto;
    display: flex;
    align-items: center;
    & nav {
      display: flex;
    }
    & a,
    h1 {
      text-decoration: none;
      margin: 0 1rem 0 0;
      color: var(--accent-color);
      text-transform: capitalize;
      &:hover {
        color: white;
      }
    }
  }

  main {
    margin: 0;
    background-color: var(--primary-color);
    transition: background-color 0.4s ease;
  }
  button {
    cursor: pointer;
  }

  section.inner_content {
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    section.inner_content {
      max-width: 100vw;
    }
  }

  .search {
    background-color: transparent;
    border: 1px solid var(--secondary-color);
    border-radius: 50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .search::placeholder {
    color: var(--secondary-color);
  }

  .search:focus {
    outline: none;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
  }

  .horizontal-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: auto;
  }
  .horizontal-header h2 {
    position: sticky;
    top: 0;
    left: 1rem;
    margin: 2rem 1rem 0 1rem;
  }
  .horizontal-list {
    display: flex;
    flex-direction: row;
    width: fit-content;
  }

  .watch-now,
  .watch-later {
    color: var(--primary-color);
    background-color: var(--accent-color);
    border: none;
    border-radius: 100px;
  }

  .watch-now {
    padding: 0.5rem 1rem;
  }

  .watch-later {
    padding: 0.5rem 0.7rem;
  }

  .movie-l {
    width: 40rem;
    position: relative;
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
    height: 20rem;
    box-shadow: 2px 2px 14px 0px #2d2d2d;
  }

  .movie-l::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(9, 1, 31, 0.719),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  .movie-l .movie-info {
    display: none;
    /* position: absolute;
    padding: 1.5rem;
    bottom: 25%;
    z-index: 2; */
  }

  .movie-l .overview.visible {
    padding: 1rem;
    position: absolute;
    bottom: 0%;
    width: 80%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
    & h3 {
      font-size: 1.4rem;
    }
    & p {
    margin-top: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    /* Set the maximum number of lines before truncating */
    overflow: hidden;
    font-size: 14px;
    opacity: 0.7;
    }
  }

  .items-container,
  .searched {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat( auto-fill, minmax(210px, 1fr) );
    grid-auto-flow: dense;
    grid-template-rows: auto;
    align-items: stretch;
  }
  /* #kodi-movies > .horizontal-header > .items-container > .movie-s:nth-child(4), #kodi-movies > .horizontal-header > .items-container > .movie-s:nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
  }
  #tmdb-movies > .horizontal-header > .items-container > .movie-s:nth-child(2), #tmdb-movies > .horizontal-header > .items-container > .movie-s:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  } */
  .items-container h2 {
    width: 100%;
    margin: 2rem 1rem 0 1rem;
    display: flex;
  }

  .movie-s img,
  .movie-l img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 14px 0px #000000;
  }

  .movie-s {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: min-content;
  }

  .movie-s .movie-info {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 0.5rem;
    letter-spacing: 0.5px;
    font-size: 12px;
  }

  .movie-s .movie-info h3 {
    margin-top: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* Set the maximum number of lines before truncating */
    overflow: hidden;
    font-size: 1rem;
  }

  .movie-s .movie-info span {
    white-space: nowrap;
    display: flex;
    position: absolute;
    top: 2%;
    right: 5%;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.8rem;
    /* background: linear-gradient(15deg, #bbbbbb 0%, #008704 40%); */
    box-sizing: content-box;
    font-weight: 800;
  }

  .movie-s .overview.hidden {
    display: flex;
    flex-direction: column;
    justify-content: end;
    top: 0;
    bottom: 0;
    font-size: 12px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.281));
    position: absolute;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.5s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 4;
  }

  .movie-s .overview.hidden p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .movie-s .overview.hidden h3 {
    margin: 0;
  }

  .movie-s:hover .overview.hidden {
    opacity: 1;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f100;
  }

  ::-webkit-scrollbar-track:horizontal {
    margin: 1.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 100px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .horizontal-list::-webkit-scrollbar-track {
    margin: 1rem;
  }
  #popup-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0;
    transform: translate(-50%, -50%);
    max-width: 80vw;
    max-height: 80vh;
    height: 100%;
    width: 100%;
    overflow: visible;
    border-radius: 0.75rem;
    border: none;
    z-index: 1; /* Ensure dialog is below close button */
    &::backdrop {
      position: fixed;
      inset: 0px;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(12px);
  }
  .popup-content {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
  }
  /* The Close Button */
  .close {
  position: absolute;
  top: -10px;
  right: -10px;
  color: #aaaaaa;
  float: right;
  font-size: 1.4rem;
  font-weight: bold;
  background-color: white;
  border-radius: 100%;
  padding: 0.4rem 0.7rem;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
