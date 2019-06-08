import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #5892e9;
  }

  .mainContainer{
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

export default GlobalStyle;
