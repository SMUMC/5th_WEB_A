import styled from "styled-components";

export const Container = styled.div`
  display: flex; // 수평 배열
  margin: 0;
  background-color: rgba(128, 128, 128, 0.8);
  border-radius: 8px;
  padding: 80px;
  min-width: 900px;
  min-height: 600px;

  & > div {
    margin: 0 25px; /* 좌우 25px 간격 설정 */
    flex: 1; // 자식 요소가 확장되도록 flex 속성 추가
  }

  img {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
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
