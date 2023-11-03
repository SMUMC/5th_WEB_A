import styled from "styled-components";

export const Footer = styled.div`
  height: 150px;
  background: skyblue;
  display: flex;
  border-color: black;

  h1 {
    margin-left: 10%;
    font-size: 1rem;
    position: absolute;
  }

  div {
    margin-top: 2%;
    height: 3%;
    width: 80%;
    display: flex;
  }

  p {
    position: relative;
    margin-left: 31%;
    font-size: 1rem;
  }

  button {
    background: transparent;
    width: 15%;
    font-size: 1rem;
    margin-top: 3%;
    margin-right: 45%;
    height: 40%;
    color: red;
    border-color: red;
  }
`;
