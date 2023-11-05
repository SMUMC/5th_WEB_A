import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  padding: 8rem;

  h1 {
    color: rgb(230, 90, 39);
    font-size: 5rem;
    font-family: fantasy;
    text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow,
      0px -1px yellow;
  }
`;

export { Container };
