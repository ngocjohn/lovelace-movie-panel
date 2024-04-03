// combinedStyles.js
import { css } from 'lit';
import dialogCss from './dialogcss.js';
import headerCss from './headercss.js';
import mainStyles from './mainstyles.js';
import mediaQueryStyles from './mediaquerystyles.js';

const combinedStyles = css`
  ${mainStyles}
  ${headerCss}
  ${dialogCss}
  ${mediaQueryStyles}
`;

export default combinedStyles;
