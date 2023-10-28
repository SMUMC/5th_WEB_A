import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
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
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;
