import { css } from 'lit';

export default css`
  @media (max-width: 768px) {
    .header {
      width: 100%;
    }
    section.inner_content {
      max-width: 100vw;
    }
    .items-container,
    .searched {
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    }
    .movie-s {
      /* max-width: 180px !important; */
      min-width: 150px !important;
      margin: 0.5rem;
    }
  }
`;
