import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  p {
    color: yellow;
    font: 1rem;
    text-align: center;
  }
`;

export const Loader = styled.div`
  margin: 20px;
  border-right: 16px solid red;
  border-top: 16px solid yellow;
  border-bottom: 16px solid orangered;
  border-left: 16px solid green;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 1s linear infinite;
`;
