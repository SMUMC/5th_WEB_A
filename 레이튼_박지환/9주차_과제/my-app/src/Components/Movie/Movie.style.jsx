import styled from "styled-components";

export const MoviesStyle = styled.div`
  width: 220px;
  top: 0;
  left: 0;
  position: absolute;
  color: white;
  background-color: rgb(113, 106, 207);

  img {
    width: 220px;
    height: 300px;
  }

  span {
    display: flex;
    align-items: center;
    height: 80px;
    margin: 0;
    justify-content: space-between;
    padding: 0px 25px;
  }
`;

export const BasicImg = styled.div`
  background-color: #e0115f;
  width: 220px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
