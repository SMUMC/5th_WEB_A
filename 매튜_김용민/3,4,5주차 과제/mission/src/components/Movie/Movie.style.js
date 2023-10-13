import styled from 'styled-components';

const Wrapper = styled.section`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 85%;
  background-size: cover;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: #383b69;

  p {
    font-size: 0.7rem;
    color: white;
  }
`;

const HoverDescription = styled.div`
  position: absolute;
  font-size: 0.7rem;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  padding: 12px;
  width: 100%;
  height: 100%;
  color: gray;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { Wrapper, Image, ImageContainer, Description, HoverDescription };
