import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const BodyPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0rem;
    padding-top: 3.15625rem;
    padding-bottom: 3.15625rem;
    text-align: center;
  }
  small {
    padding-top: 1.4375rem;
  }
`;

// export const Bar = styled.hr`
//   width: 38px;
//   height: 5px;
//   border: 5px solid #403e45;
//   border-radius: 5px;
// `;
