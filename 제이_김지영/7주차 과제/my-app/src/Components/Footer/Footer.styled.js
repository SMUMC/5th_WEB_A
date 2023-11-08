import styled from "styled-components";

const Container = styled.div`
  height: 200px;

  .info {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;

    color: rgb(150, 10, 10);
    font-family: "Gill Sans", sans-serif;
    white-space: nowrap; //브라우저 창 줄여도 줄바꿈 X
  }
  h1 {
    color: white;
    margin-bottom: 10px;
  }
  h4 {
    color: white;
    height: 30px;
  }
`;

export { Container };
