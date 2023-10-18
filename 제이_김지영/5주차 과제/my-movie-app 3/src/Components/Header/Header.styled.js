import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
  h1 {
    margin-right: 30px;
    margin-bottom: 25px;
    color: rgb(230, 90, 39);
    font-size: 2.5rem;
    font-family: fantasy;
    text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow,
      0px -1px yellow;
  }

  h1.hovered1 {
    font-size: 42px; 
  }
  h1.hovered2 {
    font-size: 42px; 
  }
  h1.hovered3 {
    font-size: 42px; 
  }
  h1.hovered4 {
    font-size: 42px; 
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 15%;
`;

const Category = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 15%;
`;

export { Container, Logo, Category };
