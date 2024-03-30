import { css } from 'lit';

export default css`
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
      font-size: 28px;
      font-weight: bold;
      background-color: white;
      border-radius: 100%;
      padding: 0.15rem 0.7rem;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }

  #toast {
    visibility: hidden;
    max-width: fit-content;
    height: 50px;
    margin-left: -125px;
    margin: auto;
    background-color: var(--accent-color);
    text-align: center;
    border-radius: 10px;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 80px;
    font-size: 1rem;
    border: solid black;
  }
  #toast #img {
    width: 50px;
    height: 50px;
    float: left;
    box-sizing: border-box;
    background-color: var(--secondary-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    & path {
      fill: var(--accent-color);
    }
  }
  #toast #desc {
    font-size: large;
    color: #000;
    padding: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }
  #toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
      fadeout 0.5s 2.5s;
    animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
      fadeout 0.5s 4.5s;
  }
  @-webkit-keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 80px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 80px;
      opacity: 1;
    }
  }

  @-webkit-keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }

  @keyframes stay {
    from {
      min-width: 350px;
    }
    to {
      min-width: 350px;
    }
  }
  @-webkit-keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @keyframes shrink {
    from {
      min-width: 350px;
    }
    to {
      min-width: 50px;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      top: 80px;
      opacity: 1;
    }
    to {
      top: 0px;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      top: 80px;
      opacity: 1;
    }
    to {
      top: 0px;
      opacity: 0;
    }
  }
`;
