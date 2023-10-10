import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
`;

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  width: 250px;
  height: 250px;
  border: 100px solid gold;
  border-radius: 50%;
`;

export { Container, LoadingSpinner };
