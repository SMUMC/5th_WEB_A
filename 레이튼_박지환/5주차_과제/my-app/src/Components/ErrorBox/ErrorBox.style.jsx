import styled from "styled-components";

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 100vh;

  h1 {
    color: red;
    font-size: 30px;
  }

  p {
    color: white;
    font-size: 20px;
  }

  a {
    color: yellow;
    text-decoration: none;
    font-weight: bold;
  }
`;
