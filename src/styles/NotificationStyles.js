import styled from "styled-components";

export const Notification = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  justify-content: center;
  top: calc(0.888 * 3.125rem);
  right: calc(0.888 * 3.125rem);
  width: calc(0.888 * 25.5rem);
  height: calc(0.888 * 3.5rem);

  border-radius: calc(0.888 * 0.3125rem);
  background: ${(props) => props.theme.white};
  box-shadow: 0rem calc(0.888 * 0.1875rem) calc(0.888 * 0.625rem)
    rgba(0, 0, 0, 0.16);

  a:after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }
  a.thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
    margin-top: auto;
    font-family: Montserrat;
    font-weight: 500;
    font-size: calc(0.888 * 1.5rem);
    line-height: calc(0.888 * 2.125rem);
    text-align: center;
    width: calc(0.888 * 3.5rem);
    height: calc(0.888 * 3.5rem);
    border-radius: calc(0.888 * 0.3125rem) 0rem 0rem calc(0.888 * 0.3125rem);
    background: linear-gradient(
      180deg,
      rgba(248, 87, 166, 1) 0%,
      rgba(255, 88, 88, 1) 100%
    );
  }
`;
