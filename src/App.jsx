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

const SideBar = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: rgb(248, 87, 166);
  background: linear-gradient(
    180deg,
    rgba(248, 87, 166, 1) 0%,
    rgba(255, 88, 88, 1) 100%
  );
  h1 {
    margin-left: 4.6875rem;
    margin-right: 10.5625rem;
    text-align: left;
  }
  h5 {
    margin-left: 4.6875rem;
    margin-right: 4.6875rem;
    text-align: left;
  }
`;

const SideBarLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: baseline;
  align-self: flex-start;
  margin-left: 4.6875rem;
  .App-logo {
    float: left;
    /* height: 44px; */
    /* width: 44px; */
    /* margin: 0px 15px 0px 0px; */
    /* background: rgba(255, 255, 255, 0) 0%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 45%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 5px 5px; */
  }
  h3 {
    margin-left: 0.25rem;
    margin-right: 10.5625rem;
    text-align: left;
  }
`;

function App() {
  return (
    <AppWrapper>
      <SideBar>
        <SideBarLogo>
          <img src={logo} alt="logo-ACME" className="App-logo" />
          <h3>ACME</h3>
        </SideBarLogo>
        <h1>Sign in and start saving your time today.</h1>
        <h5>
          We provide 24/7 support with our highly dedicated professional team.
        </h5>
      </SideBar>
    </AppWrapper>
  );
}

export default App;
