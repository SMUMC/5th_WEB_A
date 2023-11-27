import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 30px;
  h2 {
    color: white;
    font-size: 1.3rem;
  }

  p {
    color: greenyellow;
  }
`;

export const CastContainer = styled.div`
  height: 200px;
  width: 2000px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

export const CrewContainer = styled.div`
  height: 200px;
  width: 2000px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;

export const ImageContainer = styled.div`
  img {
    margin: 0px 20px;
    width: 100px;
    height: 100px;
  }
`;
