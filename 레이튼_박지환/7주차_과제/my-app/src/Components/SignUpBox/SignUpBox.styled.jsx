import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  color: white;
  ${theme.style.flexCenterColumn}

  form {
    ${theme.style.flexCenterColumn}
  }

  h1 {
    margin: 20px 0px;
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    font-size: 0.8rem;
    color: red;
  }

  input {
    ${theme.style.signUpBox}
  }

  button {
    ${theme.style.signUpBox}
  }
`;
