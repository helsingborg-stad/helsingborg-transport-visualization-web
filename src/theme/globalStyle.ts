import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    ${theme};
  }
  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }
  html, body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    h1, h2, h3, h4, h5, h6, p {
    color: #000000;
    }
  }
`;

export default GlobalStyle;
