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
  }

  img {
    width: 70px;
    height: 70px;
  }

  h1 {
    padding-top: 15px;
    padding-left: 20px;
    font-size: 1rem;
  }

  .buttonWrapper {
    ${theme.style.flexCenterColumn}
    flex: 1;
    justify-content: flex-end;
  }

  button {
    background: transparent;
    border: none;
  }
`;
