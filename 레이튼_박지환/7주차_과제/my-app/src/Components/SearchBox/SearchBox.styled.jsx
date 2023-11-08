import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  ${theme.style.flexCenterColumn}
  overflow: auto;

  h1 {
    font-size: 2rem;
    color: white;
    margin: 20px;
  }

  div {
    background: white;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    height: 80%;
    border-radius: 10px;
    display: grid;
    margin: 10px;
  }

  h2 {
    font-size: 1rem;
  }
  img {
    width: 100px;
    height: 100px;
  }

  input {
    ${theme.style.signUpBox};
  }
`;
