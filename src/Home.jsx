import React, { useContext } from "react";
import bar from "../static/bar.svg";
import { AppWrapper } from "./styles/AppWrapperStyles";
import { BodyPanel, BodyWrapper } from "./styles/BodyPanelStyles";
import { AppFooter, FooterSmall } from "./styles/FooterStyles";
import { ActionButton, Form } from "./styles/FormStyles";
import { Notification } from "./styles/NotificationStyles";
import { SideBar, SideBarLogo } from "./styles/SideBarStyles";
import { SuccessContext } from "./SuccessContext";
import { useForm } from "./useForm";

const Home = ({ history }) => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const { reset, setReset } = useContext(SuccessContext);
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
          <h3 className="home">Sign In</h3>
          <img src={bar} alt="styled-horizontal-bar" className="App-bar" />

          <Form
            data-test="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="Email"></label>
            <input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            ></input>

            {reset && (
              <Notification>
                <p>Password reset instructions have been sent.</p>
                <a
                  href=""
                  className="thumb"
                  onClick={() => {
                    e.preventDefault();
                    setReset(!reset);
                  }}
                >
                  👍
                </a>
              </Notification>
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
                history.push("/reset-password");
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
};

export default Home;
