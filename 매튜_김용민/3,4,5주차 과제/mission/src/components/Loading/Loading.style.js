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
  background: #23254b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;

  p {
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
  }
`;

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border: 100px solid gray;
  border-left: 100px solid gold;
  background: transparent;
  width: 256px;
  height: 256px;
  border-radius: 50%;
`;

export { Container, LoadingSpinner };
