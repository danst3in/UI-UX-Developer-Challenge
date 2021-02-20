import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorStyles = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.white};
  margin: 2rem 0;
  border: 0.05rem solid ${(props) => props.theme.black};
  border-left: 0.28rem solid ${(props) => props.theme.red};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  console.dir(error);
  // if (
  //   (error.networkError && error.networkError,
  //   result && error.networkError.result.errors.length > 0)
  // ) {
  //   return error.networkError.result.errors.map((error, i) => (
  //     <ErrorStyles key={i + Math.random() * i}>
  //       <p data-test="network-error">
  //         <strong>Shoot!</strong>
  //         {error.message}
  //       </p>
  //     </ErrorStyles>
  //   ));
  // }
  return (
    <ErrorStyles role="alert">
      <p data-test="unknown-error">
        <strong>Shoot!</strong>
        {error.message}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {},
};
DisplayError.propTypes = {
  error: PropTypes.object,
};

// export default ErrorStyles;
export default DisplayError;
