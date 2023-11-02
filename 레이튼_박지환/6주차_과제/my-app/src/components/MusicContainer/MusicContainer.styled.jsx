import styled from "styled-components";
import theme from "../../theme";

export const MusicContainer = styled.div`
  height: 70px;
  width: 80%;
  background: pink;
  margin: 20px 0px;

  .wrapper {
    display: flex;
    flex-direction: row;
    ${theme.style.flexCenter}
  }

  img {
    margin-bottom: 5px;
    width: 70px;
    height: 70px;
  }

  h1 {
    margin: 1%;
    font-size: 0.8rem;
    width: 100%;
  }

  .buttonWrapper {
    width: 20px;
    margin-left: 40%;
    ${theme.style.flexCenterColumn}
  }

  button {
    background: transparent;
    border: none;
  }
`;
