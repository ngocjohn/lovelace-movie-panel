import { css } from 'lit';

export default css`
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #000;
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur(15px) brightness(0.7);
    z-index: 5;
    margin: 0;
    padding: 0 1rem 0 1rem;
    overflow: hidden;
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      align-items: flex-end;
    }
    li {
      float: left;

      a {
        display: block;
        text-decoration: none;
        text-align: center;
        padding: 1rem 16px;
        text-transform: capitalize;
        color: var(--accent-color);
        font-size: 20px;
        font-weight: 700;
        font-family: 'Raleway';
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s ease-in;
        &:hover:not(.active) {
          background-color: var(--secondary-bg-color);
          color: white;
        }

        &.active {
          border-bottom: 2px solid var(--accent-color);
          color: white;
        }
      }
    }
  }

  #search-container {
    display: inline-flex;
    justify-content: end;
    align-items: center;
    max-width: 400px;
    width: 100%;
    height: 100%;

    .search-icon,
    .reset-icon {
      cursor: pointer;
      transition: all 0.3s ease;
      order: 2;
      display: block;
      flex-shrink: 0;
      & path {
        fill: var(--accent-color);
      }
      &:hover path {
        fill: white;
      }
    }

    #form {
      flex-grow: 0;
      transition: width 0.3s ease-in-out;
      display: flex;
      align-items: center;
      width: 0;
      overflow: hidden;
      order: 1;

      .search-input {
        width: 100%;
        padding: 8px 10px;
        border-radius: 1rem;
        font-size: 16px;
        /* background-color: transparent; */
        background-color: var(--secondary-bg-color);
        border: 1px solid var(--secondary-color);
        transition: all 0.3s ease;
      }

      .search-input:focus {
        outline: none;
        border: 1px solid var(--accent-color);
        color: var(--accent-color);
      }
    }
    #form.show {
      width: calc(100% - 20px);
      margin-right: 20px;
    }
  }
`;
