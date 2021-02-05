import React, { useState, useEffect, useCallback } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import logo from "../static/logo.svg";
import bar from "../static/bar.svg";
import { SideBar, SideBarLogo } from "./styles/SideBarStyles";
import { BodyWrapper, BodyPanel } from "./styles/BodyPanelStyles";
import { AppFooter, FooterSmall } from "./styles/FooterStyles";
import { Form, ActionButton } from "./styles/FormStyles";
import { useForm } from "./useForm";

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
  grid-template-rows: auto calc(1.125 * calc(0.88888 * 4.375rem));
  grid-template-columns: calc(1.125 * calc(0.88888 * 37.5rem)) minmax(calc(1.125 * calc(0.88888 * 31.25rem)), 7fr);
  height: 100vh;
  text-align: center;
  p {
    margin: calc(1.125 * calc(0.88888 * 0.4rem));
  }
`;

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [reset, setReset] = useState(true);
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
          <Form
            data-test="form"
            onSubmit={(e) => {
              e.preventDefault();
              // setEmail("");
            }}
          >
            <label htmlFor="Email"></label>
            <input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            ></input>

            {reset === true && (
              <>
                <label htmlFor="Password"></label>
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                ></input>
              </>
            )}
            <ActionButton title="sign-in" type="submit">
              SIGN IN
            </ActionButton>
          </Form>
          <small>
            Forgot your password?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setReset(!reset); // would make this more intelligent in production
              }}
            >
              {" "}
              Reset it here.
            </a>
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
