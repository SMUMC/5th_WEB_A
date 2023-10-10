import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 400px; // 500px

  position: relative; // 상대적기준으로 바꾸겠다.
  // 야, position: absolute놈들아, 내기준을 따라라.

  display: flex;
  flex-direction: column;

  background-color: #373b69;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%; // 400px
`;

const Image = styled.img`
  width: 100%;
  height: 100%; // 400px
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const MovieDescription = styled.div`
  width: 100%;
  height: 20%; //100px
  padding: 1rem;

  display: flex;
  justify-content: space-around;

  p {
    font-size: 0.8rem;
    color: white;
    height: 100%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  h3 {
    color: white;
    text-align: right;
  }
`;

const HoverDescription = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: back;
`;

export { Container, ImageContainer, Image, MovieDescription, HoverDescription };
