import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  ${theme.style.flexCenterColumn}
  overflow: auto;

  h1 {
    font-size: 2rem;
    color: white;
    margin: 20px;
  }

  div {
    background: white;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    height: 80%;
    border-radius: 10px;
    display: grid;
    margin: 10px;
  }

  h2 {
    width: 90px;
    font-size: 1rem;
    overflow: hidden; // 넓이가 90px를 넒어서는 내용에 대해서는 보이지 않게 처리함
    text-overflow: ellipsis; // 글자가 넓이 90px를 넘을 경우 생략부호를 표시함
    white-space: nowrap; // 공백문자가 있는 경우 줄바꿈하지 않고 한줄로 나오게 처리함 (\A로 줄바꿈가능)
  }

  img {
    width: 100px;
    height: 100px;
  }

  .loadingMessage {
    height: 200px;
    ${theme.style.flexCenter};
  }

  .baseImage {
    color: white;
    background: skyblue;
    width: 100px;
    height: 100px;
  }

  p {
    width: 60%;
    height: 80%;
  }

  input {
    ${theme.style.signUpBox};
  }
`;
