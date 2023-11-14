import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: rgba(128, 128, 128, 0.8);
  border-radius: 20px;
  padding: 30px;
  min-width: 900px;
  min-height: 1200px;
`;

export const Movie = styled.div`
  display: flex;
  margin: 0;
  background-color: rgba(128, 128, 128, 0.8);
  border-radius: 8px;
  min-width: 1300px;
  height: 800px;

  & > div {
    margin: 0 25px; /* 좌우 25px 간격 설정 */
    flex: 1; // 자식 요소가 확장되도록 flex 속성 추가
  }

  img {
    max-width: 500px;
    height: auto;
    border-radius: 15px;
  }

  h1 {
    font-size: 40px;
    color: white;
  }

  h3 {
    font-size: 25px;
    color: white;
  }

  div {
    color: white;
  }
`;

export const People = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 60px;
    height: auto;
    border-radius: 15px;
    margin-right: 20px;
  }

  h3 {
    font-size: 25px;
    color: white;
  }

  div {
    color: white;
    display: flex;
    flex-direction: column;
  }

  .cast-list {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    margin-top: 10px;
  }

  .crew-list {
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    margin-top: 10px;
  }
`;
