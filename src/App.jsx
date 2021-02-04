import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";

/**
 * TODO: Import Fonts
 *
 * TODO: set theme (colors, font weights, etc)
 *    TODO: Set Sidebar Layout
 *    TODO: Set Main Panel Layout
 *
 * TODO: create sign-in page & form
 *    TODO: Style Form Inputs
 *    TODO: Create onchange handler for each input
 *    TODO: Handle Form Submission
 *
 * TODO: create password reset page
 *    TODO: Handle reset Form Submission
 *
 * TODO: create dismissible notification
 *
 *
 */

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  grid-template-columns: 600px 7fr;
  height: 100vh;
  text-align: center;
  p {
    margin: 0.4rem;
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} alt="logo-react" className="App-logo" />
        <p>hey!</p>
      </header>
    </AppWrapper>
  );
}

export default App;
