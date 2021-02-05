import styled from "styled-components";

export const SideBar = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.pink};
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
  .topBox {
    position: absolute;
    top: -3.5rem;
    right: -3.5rem;
    width: 7.0625rem;
    height: 7.0625rem;
    border-radius: 0.3125rem;
    background: transparent;
    border: 1.25rem solid ${(props) => props.theme.white};
    opacity: 0.5;
    overflow: hidden;
  }
  .botBox {
    position: absolute;
    bottom: -2.9375rem;
    left: -2.9375rem;
    width: 14.375rem;
    height: 14.375rem;
    border-radius: 0.3125rem;
    background: transparent;
    border: 2.5rem solid ${(props) => props.theme.white};
    opacity: 0.5;
    overflow: hidden;
  }
`;

export const SideBarLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-content: baseline;
  align-self: flex-start;
  align-items: center;
  margin-left: 4.6875rem;
  .App-logo {
    width: 2.75rem;
    height: 2.75rem;
    background: rgba(255, 255, 255, 0.5) 0%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    filter: drop-shadow(0rem 0.1875rem 0.375rem rgba(0, 0, 0, 0.16));
    float: left;
    border-radius: 0.3125rem 0.3125rem;
    margin: 0rem 0.9375rem 0rem 0rem;
  }
  h3 {
    margin-left: 0.25rem;
    margin-right: 10.5625rem;
    text-align: left;
  }
`;
