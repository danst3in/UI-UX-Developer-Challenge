import styled from "styled-components";

export const ActionButton = styled.button`
  /* color: #ffffff; */
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    0deg,
    rgba(248, 87, 166, 1) 0%,
    rgba(255, 88, 88, 1) 100%
  );
  width: 22.5rem;
  height: 3.5rem;
  border-radius: 0.3125rem;
  margin-top: 1.25rem;
  /* text-align: center; */
  align-self: center;
  padding: 28px 0;
`;
export const Form = styled.form`
  height: 13rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: space-between;
  justify-content: space-between;
  margin-top: 1.09625rem;
  input {
    background: ${(props) => props.theme.offWhite};
    border: 0.0625rem solid ${(props) => props.theme.grey};
    border-radius: 0.3125rem;
    height: 3.5rem;
    margin-top: 1.25rem;
    padding: 20px 17px;
  }

  input[name="email"]:focus {
    outline-color: ${(props) => props.theme.pink};
    border: 0.0625rem solid ${(props) => props.theme.pink};
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 18px;
  }

  input[type="password"]:focus {
    outline-color: ${(props) => props.theme.pink};
    border: 0.0625rem solid ${(props) => props.theme.pink};
  }
`;
