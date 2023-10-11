import styled from "styled-components";

const MoviesStyle = styled.div`
  width: 220px;
  top: 0;
  left: 0;
  position: absolute;
  color: white;
  background-color: rgb(113, 106, 207);
`;

const MoviesImgStyle = styled.img`
  width: 100%;
  height: 300px;
`;

const MoviesInfoStyle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0;
  justify-content: space-between;
  padding: 0px 25px;
`;

export { MoviesStyle, MoviesImgStyle, MoviesInfoStyle };
