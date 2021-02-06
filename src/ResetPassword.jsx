import React, { useContext } from "react";
import bar from "../static/bar.svg";
import { AppWrapper } from "./styles/AppWrapperStyles";
import { BodyPanel, BodyWrapper } from "./styles/BodyPanelStyles";
import { AppFooter, FooterSmall } from "./styles/FooterStyles";
import { ActionButton, Form } from "./styles/FormStyles";
import { SideBar, SideBarLogo } from "./styles/SideBarStyles";
import { SuccessContext } from "./SuccessContext";
import { useForm } from "./useForm";

const ResetPassword = ({ history }) => {
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
          <h3>Reset Password</h3>
          <small className="reset">
            Enter your registered email in order to receive password reset
            Instructions.
          </small>
          <img
            src={bar}
            alt="styled-horizontal-bar"
            className="App-bar-reset"
          />
          <Form
            className="reset-password"
            data-test="form"
            onSubmit={(e) => {
              e.preventDefault();
              history.push("/");
              setReset(!reset);
            }}
          >
            <label htmlFor="Email"></label>
            <input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            ></input>
            <ActionButton
              title="reset password"
              type="submit"
              disabled={values.email === ""}
              onClick={(e) => {
                e.preventDefault();
                history.push("/");
                setReset(!reset);
              }}
            >
              Reset Password
            </ActionButton>
          </Form>
          <small>
            Didn’t mean to click that?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                history.push("/");
              }}
            >
              {" "}
              Sign In.
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

export default ResetPassword;
