import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  height: 20%;

  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-size: 4rem;
  }

  h3 {
    margin-top: 20px;
    margin-right: 250px;
    color: white;
    font-size: 3rem;
  }

  h4 {
    margin-left: 250px;
    color: white;
    font-size: 3rem;
  }
`;

export { Wrapper };
