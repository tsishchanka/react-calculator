import { createGlobalStyle } from 'styled-components';

import { font } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${font};
  }

  html, body {
    max-width: 1920px;
    min-height: 1080px;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
  }`;
