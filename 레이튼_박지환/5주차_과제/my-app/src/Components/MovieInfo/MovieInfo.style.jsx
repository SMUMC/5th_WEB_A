import styled from "styled-components";

export const InfoBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled.div`
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
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
export const MovieInfoImg = styled.img`
  width: 500px;
  height: 80%;
  margin-right: 100px;
`;

export const InfoTitle = styled.span`
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const MovieStar = styled.div`
  margin-bottom: 100px;
`;

export const MovieTitle = styled.div`
  font-size: 50px;
  margin-bottom: 100px;
`;

export const MovieInfo = styled.div`
  font-size: 15px;
`;
