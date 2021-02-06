import styled from "styled-components";

export const Notification = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  justify-content: center;
  top: 0rem;
  right: 0rem;
  width: calc(0.888 * 25.5rem);
  height: calc(0.888 * 3.5rem);
  a.thumb {
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
