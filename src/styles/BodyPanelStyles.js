import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  grid-column-start: 2;
  grid-column-end: 3;
  min-width: calc(0.88888 * 23.75rem);
`;

export const BodyPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  max-width: calc(0.88888 * 22.5rem);

  h3 {
    margin: 0rem;
    padding-top: calc(0.88888 * 3.15625rem);
    padding-bottom: calc(0.88888 * 1.25rem);
    text-align: center;
  }
  .home {
    padding-bottom: calc(0.88888 * 3.15625rem);
  }
  small {
    padding-top: calc(0.88888 * 1.4375rem);
    .reset {
      padding-top: calc(0.88888 * 1.4375rem);
      line-height: calc(0.88888 * 1.25rem);
    }
  }
  .App-bar-reset {
    margin-top: calc(0.88888 * 3.125rem);
  }
`;
