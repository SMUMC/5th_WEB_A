import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  ${theme.style.flexCenterColumn}

  h1 {
    color: white;
    margin: 20px 0px;
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    color: red;
    text-align: left;
    margin: 0;
  }
  input {
    ${theme.style.signUpBox}
  }

  input::placeholder {
    text-indent: 20px; // placeholder는 이걸로 스타일링 해야함
  }

  button {
    ${theme.style.signUpBox}
  }
  button:disabled {
    background-color: grey;
  }
`;
