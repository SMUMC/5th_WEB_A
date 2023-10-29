import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 150px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    position: absolute;
    font-size: 1.7rem;
    font-weight: bold;
    height: 50px;
    margin-bottom: 5%;
    margin-right: 20%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h3 {
    position: absolute;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 5%;
    margin-left: 20%;
  }
`;
