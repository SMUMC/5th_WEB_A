import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  hr {
    width: 850px;
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  margin-bottom: 70px;

  button {
    height: 30px;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalBox = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 25px;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  button {
    margin-right: 15px;
  }
`;

export { Container, Result, Price, ModalBackground, ModalBox };
