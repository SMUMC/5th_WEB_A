import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;

  p {
    font-size: 24px;
    color: white;
  }
`;

const LoadingSpinner = styled.div`
  width: 250px;
`;

export { Container, LoadingSpinner };
