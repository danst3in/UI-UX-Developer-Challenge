import styled from "styled-components";

export const ActionButton = styled.button`
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    0deg,
    rgba(248, 87, 166, 1) 0%,
    rgba(255, 88, 88, 1) 100%
  );
  width: calc(0.88888 * 22.5rem);
  height: calc(0.88888 * 3.5rem);
  border-radius: calc(0.88888 * 0.3125rem);
  margin-top: calc(0.88888 * 1.25rem);
  border-color: ${(props) => props.theme.pink};
`;
export const Form = styled.form`
  height: 13rem;
  .reset-password {
    height: calc(0.8888 * 11rem);
  }
  display: flex;
  flex-flow: column nowrap;
  align-items: space-between;
  justify-content: space-evenly;
  margin-top: calc(0.88888 * 1.09625rem);
  input {
    background: ${(props) => props.theme.offWhite};
    border: calc(0.88888 * 0.0625rem) solid ${(props) => props.theme.grey};
    border-radius: calc(0.88888 * 0.3125rem);
    height: calc(0.88888 * 3.5rem);
    margin-top: calc(0.88888 * 1.25rem);
    padding: 20px 17px;
  }

  input[name="email"]:focus {
    outline-color: ${(props) => props.theme.pink};
    border: calc(0.88888 * 0.0625rem) solid ${(props) => props.theme.pink};
    font-weight: 500;
    line-height: calc(0.88888 * 1.5rem);
    font-size: 18px;
  }

  input[type="password"]:focus {
    outline-color: ${(props) => props.theme.pink};
    border: calc(0.88888 * 0.0625rem) solid ${(props) => props.theme.pink};
  }
`;
