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

export const NormalizeCss = createGlobalStyle`
  ${normalize}

/* @font-face{
  font-family: 'radnikanext';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;
} */

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
