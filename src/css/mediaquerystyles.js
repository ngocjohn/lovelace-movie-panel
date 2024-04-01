import { css } from 'lit';

export default css`
  @media (max-width: 768px) {
    #popup-dialog {
      max-width: 100vw !important;
      max-height: 100vh !important;
    }
    .header {
      width: 100%;
    }
    .movie-s {
      /* max-width: 180px !important; */
      min-width: 150px !important;
      margin: 0.5rem;
    }
    .items-container,
    .searched {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }
`;
