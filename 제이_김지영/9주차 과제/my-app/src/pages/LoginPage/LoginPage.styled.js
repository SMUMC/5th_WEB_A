// SignupPage.styled.js
import styled from "styled-components";

const Container = styled.div`
  background-image: url("background.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: 0.7;
    width: 50%;
    height: 80%;
    border-radius: 15px;
    gap: 10px;
    min-width: 500px;
    min-height: 200px;
    white-space: nowrap;
    padding: 20px;
  }

  .box-title {
    font-weight: bold;
    font-size: px;
    margin-bottom: 10px;
  }

  hr {
    width: 70%;
    background-color: grey;
    margin-bottom: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 0px;
    margin-top: 30px;
    width: 300px;
  }

  input {
    width: 100%;
    height: 40px;
    color: grey;
    background-color: transparent;
    font-size: 15px;
    border: 1.5px solid rgb(145, 134, 134);
    padding-left: 10px;
    border-radius: 10px;
    text-align: left;
  }

  span {
    color: red;
    font-size: 12px;
    align-self: flex-start; // 왼쪽 아래 정렬
    margin-top: -5px; // 추가 여백 조절
  }

  button {
    background-color: rgb(73, 73, 73);
    color: white;
    width: 100%;
    height: 45px;
    margin: auto;
    display: block;
    font-size: 17px;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

export { Container };
