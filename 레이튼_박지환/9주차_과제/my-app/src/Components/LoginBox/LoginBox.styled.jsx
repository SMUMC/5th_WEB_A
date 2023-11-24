import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  h1 {
    ${theme.style.flexCenterColumn}
    color: white;
    margin: 20px 0px;
    font-size: 2rem;
    font-weight: bold;
  }

  form {
    ${theme.style.flexCenterColumn};
    margin: 20px;
  }

  input {
    ${theme.style.signUpBox};
  }

  p {
    font-size: 0.8rem;
    color: red;
  }

  input::placeholder {
    text-indent: 20px; // placeholder는 이걸로 스타일링 해야함
  }

  button {
    ${theme.style.signUpBox};
  }

  button:disabled {
    background-color: grey;
  }
`;
