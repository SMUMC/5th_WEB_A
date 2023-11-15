import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Background = styled.div`
  ${theme.styles.flexCenterColumn};
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  background-color:rgba(0, 0, 0, 0.5);
`;

export const LoadingText = styled.div`
  text-align: center;
  color: white;
`;

export const Loader = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    margin: 0 auto;
    margin-top: 20px;
`;