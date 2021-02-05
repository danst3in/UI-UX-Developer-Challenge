import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import logo from "../static/logo.svg";
import bar from "../static/bar.svg";
import { SideBar, SideBarLogo } from "./styles/SideBarStyles";
import { BodyWrapper, BodyPanel } from "./styles/BodyPanelStyles";
import { AppFooter, FooterSmall } from "./styles/FooterStyles";
import { Form, ActionButton } from "./styles/FormStyles";

/**
 * TODO: Import Fonts
 *
 * TODO: set theme (colors, font weights, etc)
 *    //TODO: Set Sidebar Layout
 *    //TODO: Set Sidebar Styles
 *    //TODO: Set Main Panel Layout
 *    //TODO: Set Main Panel Styles
 *
 * TODO: create sign-in page & form
 *    TODO: Style Form Layout
 *    TODO: Style Form Inputs
 *    TODO: Create onchange handler for each input
 *    TODO: Handle Form Submission
 *
 * TODO: create password reset page
 *    TODO: Style Form Layout
 *    TODO: Handle reset Form Submission
 *    TODO: Handle reset Form Inputs OnSubmit
 *
 * TODO: create dismissible notification
 *
 *
 */

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 4.375rem;
  grid-template-columns: 37.5rem 7fr;
  height: 100vh;
  text-align: center;
  p {
    margin: 0.4rem;
  }
`;

function App() {
  return (
    <AppWrapper>
      <SideBar>
        <SideBarLogo>
          <div className="App-logo"> </div>
          <h3>ACME</h3>
        </SideBarLogo>
        <div className="topBox"></div>
        <h1>Sign in and start saving your time today.</h1>
        <h5>
          We provide 24/7 support with our highly dedicated professional team.
        </h5>
        <div className="botBox"></div>
      </SideBar>
      <BodyWrapper>
        <BodyPanel>
          <h3>Sign In</h3>
          <img src={bar} alt="styled-horizontal-bar" className="App-bar" />
          <Form>
            <input placeholder="Email"></input>
            <input placeholder="Password" type="password"></input>
            <ActionButton title="sign-in">SIGN IN</ActionButton>
          </Form>
          <small>
            Forgot your password? <a href=""> Reset it here.</a>
          </small>
        </BodyPanel>
      </BodyWrapper>
      <AppFooter>
        <FooterSmall>
          <FooterSmall>&copy; Copyright ACME 2021</FooterSmall>
        </FooterSmall>
      </AppFooter>
    </AppWrapper>
  );
}

export default App;
