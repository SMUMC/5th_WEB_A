import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100%;
  padding: 32px;
  background-color: white;
`;

const MovieWrapper = styled.div`
  background-color: #dcdcdc;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;

  display: flex;
  justify-content: space-around;
`;

const MovieImage = styled.img`
  border-radius: 24px;
  object-fit: contain;
`;

const MovieDescription = styled.div`
  margin-left: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h1 {
    font-size: 4rem;
    color: black;
  }

  h3 {
    font-size: 2rem;
    margin: 10px 0;
  }

  p {
    font-size: 1.5rem;
  }
`;

export { Container, MovieWrapper, MovieImage, MovieDescription };
