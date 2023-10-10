import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 500px; // 500px
  display: flex;
  flex-direction: column;

  h3 {
    color: white;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%; // 400px
`;

const Image = styled.img`
  width: 100%;
  height: 100%; // 400px
`;

const MovieDescription = styled.div`
  width: 100%;
  height: 20%; //100px
`;

export { Container, ImageContainer, Image, MovieDescription };
