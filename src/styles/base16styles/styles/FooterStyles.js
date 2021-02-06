import styled from "styled-components";

export const AppFooter = styled.footer`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const FooterSmall = styled.div`
  line-height: 1.25rem;
  color: ${(props) => props.theme.grey};
`;
