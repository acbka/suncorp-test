import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
to {
        transform: rotate(360deg);
    }
`;

const SpinnerBody = styled.div`
  height: 4rem;
  width: 4rem;
  border: solid #d1d5db;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: ${spinnerAnimation} 800ms linear infinite;
  position: absolute;
  top: 40%;
`;

const Spinner = () => {
  return <SpinnerBody data-testid="spinner" />;
};

export default Spinner;
