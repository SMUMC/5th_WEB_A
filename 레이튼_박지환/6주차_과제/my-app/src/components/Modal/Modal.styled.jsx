import styled from "styled-components";

export const Modal = styled.div`
  width: 200px;
  height: 200px;
  background: skyblue;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 1rem;
    margin-top: 20px;
    margin-left: 5px;
  }
  button {
    color: red;
    border: none;
    margin: 30px;
    background: transparent;
  }
`;
