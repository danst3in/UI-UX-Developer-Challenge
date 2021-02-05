import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import normalize from "./styles/modern-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  pink: "#F857A6",
  red: "#FF5858",
  black: "#403E45",
  grey: "#C9C0C0",
  white: "#FFFFFF",
  offWhite: "#F7F4F5",
  maxWidth: "82.5rem",
};

/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap'); // not working in styled-components V5, moved to index.html */

export const NormalizeCss = createGlobalStyle`
  ${normalize}
  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height:1.5rem;
    font-size: 16px;
    /* font-size: 18px; */
    overflow:hidden;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 3.5rem;
    font-size: 300%
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 2.75rem;
    font-size: 225%
  }
  h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.875rem;
    font-size: 125%
  }
  small {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 3.5rem;
    font-size: 87.5%
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    /* line-height: 3.5rem;
    font-size: 87.5% */
  }
  a {
    color:${(props) => props.theme.pink};
    text-decoration: none;
  }
`;

// mount app
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NormalizeCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// React fast refresh enabled via installed plugin + added to config
//  @snowpack/plugin-react-refresh
if (import.meta.hot) {
  import.meta.hot.accept();
}
