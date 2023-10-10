import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;

  h3 {
    color: white;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MovieDescription = styled.div`
  width: 100%;
  height: 20%;
`;

export { Container, ImageContainer, Image, MovieDescription };
