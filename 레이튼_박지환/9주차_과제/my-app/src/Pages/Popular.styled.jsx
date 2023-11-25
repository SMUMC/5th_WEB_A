import styled from "styled-components";
import theme from "../theme";
export const Container = styled.div`
  ${theme.style.flexCenter}
  gap: 30px;

  button {
    border-radius: 10px;
    background-color: #52e4dc;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
  }

  button:hover {
    background-color: bisque;
    cursor: pointer;
  }

  button:disabled {
    background: #ccc;
    cursor: none;
  }
  div {
    color: white;
  }

  div:hover {
    color: bisque;
  }
`;
