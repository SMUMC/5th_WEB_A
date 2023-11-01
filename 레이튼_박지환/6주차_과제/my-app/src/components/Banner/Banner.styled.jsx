import styled from "styled-components";

export const Banner = styled.div`
  height: 100px;
  background: skyblue;
  color: black;

  h1 {
    padding-top: 20px;
    padding-left: 30px;
    font-size: 1.5rem;
  }

  div {
    position: relative;
    border-radius: 10px;
    width: 17px;
    z-index: 999;
    background: pink;
    margin-left: 92%;
  }
`;
