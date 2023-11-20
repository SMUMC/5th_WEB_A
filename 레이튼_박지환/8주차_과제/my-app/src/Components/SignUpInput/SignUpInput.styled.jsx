import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  color: white;
  ${theme.style.flexCenterColumn}

  div {
    display: relative;
    align-items: flex-start;
  }

  p {
    font-size: 0.8rem;
    color: red;
  }

  input {
    ${theme.style.signUpBox}
  }
`;
