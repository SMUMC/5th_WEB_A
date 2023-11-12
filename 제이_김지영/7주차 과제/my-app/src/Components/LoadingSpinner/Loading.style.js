import styled from "styled-components";
import Spinner from "./loading_spinner.gif";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  min-width: 1000px; /* 최소 너비 설정 */
  min-height: 800px; /* 최소 높이 설정 */
  //   background-color: grey;
`;

const SpinnerImage = styled.img`
  margin-bottom: 200px;
  width: 20%;
`;

export { SpinnerContainer, SpinnerImage };
