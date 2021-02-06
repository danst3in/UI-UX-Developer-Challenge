import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import normalize from "./styles/modern-normalize";

const theme = {
  pink: "#F857A6",
  red: "#FF5858",
  black: "#403E45",
  grey: "#C9C0C0",
  white: "#FFFFFF",
  offWhite: "#F7F4F5",
  maxWidth: "calc(0.88888 * 82.5rem)",
};

export const NormalizeCss = createGlobalStyle`
  ${normalize}
  html {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height:calc(0.88888 * 1.5rem);
    /* font-size: 16px; */
    font-size: 18px;
    overflow:hidden;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: calc(0.88888 * 3.5rem);
    font-size: 266.7%
    /* font-size: 300% */ /* at 16px */
  }
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: calc(0.88888 * 2.75rem);
    font-size: 200%
    /* font-size: 225% */ /* at 16px */
  }
  h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: calc(0.88888 * 1.875rem);
    font-size: 111.111%
    /* font-size: 125% */ /* at 16px */
  }
  small {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: calc(0.88888 * 1.25rem);
    font-size: 77.778%
    /* font-size: 87.5% */ /* at 16px */
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    /* line-height: calc(0.88888 * 3.5rem);
    font-size: 87.5% */
  }
  button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 100%
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
