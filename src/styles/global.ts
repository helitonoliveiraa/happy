import { createGlobalStyle } from 'styled-components';

// import 'leaflet/dist/leaflet-src';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: ${({ theme }) => theme.colors.backgroundGlobal};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button,
  textarea {
    font: 600 18px Nunito, sans-serif;
    outline: none;
  }
`;
