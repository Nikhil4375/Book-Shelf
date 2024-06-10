// src/GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
  h1, h2 {
    margin: 0;
  }
  h3 {
    margin: 0 0 8px 0;
  }
  p {
    margin: 0 0 8px 0;
  }
  input {
    margin: 0 0 16px 0;
  }
`;

export default GlobalStyle;
