import styled from "styled-components";

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 100vh;
`;

export const ErrorTitle = styled.p`
  color: red;
  font-size: 30px;
`;
export const ErrorLine = styled.p`
  color: white;
  font-size: 20px;
`;
export const ErrorLink = styled.a`
  color: yellow;
  text-decoration: none;
`;
