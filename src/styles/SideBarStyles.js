import styled from "styled-components";

export const SideBar = styled.div`
  position: absolute;
  min-height: 100vh;
  width: calc(0.88888 * 37.5rem);
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
    margin-left: calc(0.88888 * 4.6875rem);
    margin-right: calc(0.88888 * 10.5625rem);
    text-align: left;
  }
  h5 {
    margin-left: calc(0.88888 * 4.6875rem);
    margin-right: calc(0.88888 * 4.6875rem);
    text-align: left;
  }
  .topBox {
    position: absolute;
    top: calc(0.88888 * -3.5rem);
    right: calc(0.88888 * -3.5rem);
    width: calc(0.88888 * 7.0625rem);
    height: calc(0.88888 * 7.0625rem);
    border-radius: calc(0.88888 * 0.3125rem);
    background: transparent;
    border: calc(0.88888 * 1.25rem) solid ${(props) => props.theme.white};
    opacity: 0.5;
    overflow: hidden;
  }
  .botBox {
    position: absolute;
    bottom: calc(0.88888 * -2.9375rem);
    left: calc(0.88888 * -2.9375rem);
    width: calc(0.88888 * 14.375rem);
    height: calc(0.88888 * 14.375rem);
    border-radius: calc(0.88888 * 0.3125rem);
    background: transparent;
    border: calc(0.88888 * 2.5rem) solid ${(props) => props.theme.white};
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
  margin-left: calc(0.88888 * 4.6875rem);
  .App-logo {
    width: calc(0.88888 * 2.75rem);
    height: calc(0.88888 * 2.75rem);
    background: rgba(255, 255, 255, 0.5) 0%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    filter: drop-shadow(
      0rem calc(0.88888 * 0.1875rem) calc(0.88888 * 0.375rem)
        rgba(0, 0, 0, 0.16)
    );
    float: left;
    border-radius: calc(0.88888 * 0.3125rem) calc(0.88888 * 0.3125rem);
    margin: 0rem calc(0.88888 * 0.9375rem) 0rem 0rem;
  }
  h3 {
    margin-left: calc(0.88888 * 0.25rem);
    margin-right: calc(0.88888 * 10.5625rem);
    text-align: left;
  }
`;
