import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
  h1 {
    margin-right: 30px;
    margin-bottom: 25px;
    color: rgb(230, 90, 39);
    font-size: 2rem;
    font-family: "Gill Sans", sans-serif;
    text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow,
      0px -1px yellow;
    white-space: nowrap; //브라우저 창 줄여도 줄바꿈 X
  }

  button {
    text-align: center;
    margin-right: 30px;
    margin-bottom: 25px;
    color: rgb(230, 90, 39);
    font-size: 1.3rem;
    font-family: fantasy;
    text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow,
      0px -1px yellow;
    background-color: #22254b;
    border-radius: 10px 10px 10px 10px;
    // 브라우저 창 크기 조절에 따른 모양 변화 방지
    min-width: 90px; /* 최소 너비 설정 */
    min-height: 50px; /* 최소 높이 설정 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
    display: inline-block; /* 인라인 레벨로 표시하여 줄바꿈 방지 */
  }

  h1.hovered1 {
    font-size: 42px;
  }
  h1.hovered2 {
    font-size: 42px;
  }
  h1.hovered3 {
    font-size: 42px;
  }
  h1.hovered4 {
    font-size: 42px;
  }

  a {
    text-decoration: none; //하이퍼링크 밑줄 제거
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 15%;
`;

const Category = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 15%;
`;

export { Container, Logo, Category };
