import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  //background-color: lightgray; //test
  width: 850px;
  margin-bottom: 10px;
  font-weight: bold;

  button {
    width: 30px;
    height: 20px;
    background: white;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
      color: skyblue;
    }
  }
`;  

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  //background-color: antiquewhite;
  width: 700px;
  margin-bottom: 20px;
  text-align: left;
`;

export { Container, Image, Info };
