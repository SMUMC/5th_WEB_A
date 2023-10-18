import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 150px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Line1 = styled.div`
  position: absolute;
  font-size: 23px;
  font-weight: bold;
  hight: 50px;
  margin-bottom: 5%;
  margin-right: 20%;
`;

export const Line2 = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const Line3 = styled.div`
  position: absolute;
  font-size: 23px;
  font-weight: bold;
  margin-top: 5%;
  margin-left: 20%;
`;
