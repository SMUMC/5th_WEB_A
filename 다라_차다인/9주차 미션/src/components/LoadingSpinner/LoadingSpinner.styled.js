import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
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