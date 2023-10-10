import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const LoadingSpinner = styled.div`
  width: 250px;
  height: 250px;
  background-color: yellow;
  border-radius: 50%;
`;

export { Container, LoadingSpinner };
