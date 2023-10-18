import styled from 'styled-components';

const Container = styled.section`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin: auto;
`;

const Divider = styled.div`
  width: 80%;
  margin: auto;
  border-bottom: 3px solid black;
`;

export { Container, Wrapper, Image, Description, Divider };
