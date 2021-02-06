import React from "react";
import { AppWrapper } from "./styles/AppWrapperStyles";
import { SideBar, SideBarLogo } from "./styles/SideBarStyles";
import { BodyWrapper, BodyPanel } from "./styles/BodyPanelStyles";
import { AppFooter, FooterSmall } from "./styles/FooterStyles";

const FourOhFour = () => {
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
          <h1>404!</h1>
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

export default FourOhFour;
