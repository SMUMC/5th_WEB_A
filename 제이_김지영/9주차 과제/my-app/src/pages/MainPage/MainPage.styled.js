import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  padding: 0.3rem;

  h1 {
    color: rgb(230, 90, 39);
    font-size: 3rem;
    font-family: fantasy;
    text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow,
      0px -1px yellow;
    margin-top: 20px;
  }
`;

const Search = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  label {
    color: white;
    font-size: 40px;
  }

  input {
    width: 500px;
    height: 45px;
    color: black;
    font-size: 15px;
    border: 1.5px solid rgb(145, 134, 134);
    padding-left: 10px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    text-align: left;
    margin-bottom: 50px;
  }
`;

export { Banner, Search };
