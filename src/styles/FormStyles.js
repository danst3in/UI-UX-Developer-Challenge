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
`;
export const Form = styled.form`
  height: 13rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.15625rem;
`;
