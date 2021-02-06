import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: auto calc(1.125 * calc(0.88888 * 4.375rem));
  grid-template-columns: calc(1.125 * calc(0.88888 * 37.5rem)) minmax(
      calc(1.125 * calc(0.88888 * 31.25rem)),
      7fr
    );
  height: 100vh;
  text-align: center;
  p {
    margin: calc(1.125 * calc(0.88888 * 0.4rem));
  }
`;
