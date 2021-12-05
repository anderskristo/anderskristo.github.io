import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }
  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    font-family: 'Fira Code';
    margin: 0;
    padding: 15px;
    width: 100%;
    height: 100%;
  }
  body {
    background-color: #0e0e0e;
    color: white;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Code';
  }
  ::selection {
    background: #d93025;
    color: white;
  }
  main { position: relative; }
`;

export default GlobalStyle;