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
  position: relative;
  width: 10vw;
  height: 10vh;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  p {
    font: 1rem;
    text-align: center;
  }
`;

export const Loader = styled.div`
  margin: 10px;
  border: 16px solid black;
  border-top: 16px solid blue;
  border-bottom: 16px solid purple;
  border-radius: 0%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 1s linear infinite;
`;
