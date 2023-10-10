import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 500px; // 500px
  display: flex;
  flex-direction: column;
  background-color: #373b69;

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
  padding: 1rem;
`;

const MovieText = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: white;
  }
`;

export { Container, ImageContainer, Image, MovieDescription, MovieText };
