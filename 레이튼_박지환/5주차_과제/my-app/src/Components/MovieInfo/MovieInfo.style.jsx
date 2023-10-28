import styled from "styled-components";

export const InfoBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    color: black;
    font-weight: bold;
    gap: 5px;
    width: 100%;
    height: 80%;
    background-color: grey;
    border-radius: 20px;
    margin: 20px;
  }

  img {
    width: 500px;
    height: 80%;
    margin-right: 100px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  h1 {
    font-size: 50px;
    margin-right: 20px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 100px;
  }
  h3 {
    font-size: 15px;
  }
  div {
    margin-bottom: 100px;
  }
`;
