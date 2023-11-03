import styled from "styled-components";

export const ModalBackground = styled.div`
  display: ${(props) => (props.isModal ? "block" : "none")};
  // props 받아와서 동적으로  스타일링하기
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  display: ${(props) => (props.isModal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: skyblue;
  border-radius: 10px;
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
