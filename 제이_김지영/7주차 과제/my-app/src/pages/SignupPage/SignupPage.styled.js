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
    border-radius: 15px 15px 15px 15px;
    gap: 10px;
    min-width: 500px; /* 최소 너비 설정 */
    min-height: 700px; /* 최소 높이 설정 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }

  .box-title {
    font-weight: bold;
    font-size: 40px;
  }

  .hr {
    width: 70%;
    background-color: grey;
    margin-bottom: 10px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 0px;
    margin-top: 30px;
  }

  input {
    width: 350px;
    height: 40px;
    color: grey;
    background-color: transparent;
    font-size: 15px;
    border: 1.5px solid rgb(145, 134, 134);
    padding-left: 10px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    text-align: left;
  }

  .submit-button {
    background-color: rgb(73, 73, 73);
    color: white;
    width: 350px;
    height: 45px;
    margin: auto;
    display: block;
    font-size: 17px;
    border-radius: 10px 10px 10px 10px;
  }

  .hidden {
    display: none;
    /*visibility:hidden;*/
  }
  .hidden-label {
    /*display: none;*/
    visibility: hidden;
  }

  input::placeholder {
    color: grey;
  }

  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: black;
    text-decoration: none;
  }
  a:active {
    color: black;
    text-decoration: none;
  }
`;

export { Container };
