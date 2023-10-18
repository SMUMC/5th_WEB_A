import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 50px;
  display: flex;
  font-size: 40px;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  margin-top: 10px;
  gap: 20px;
`;

const SearchListWrapper = styled.div`
  position: absolute;
  background-color: white;
  top: 300px;
  width: 60%;
  height: 500px;
  overflow: auto;
  padding: 30px;
  border-radius: 10px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: gold;
  }
`;

const SearchLayout = styled.input`
  display: flex;
  background-color: white;
  border: none;
  border-radius: 30px;
  padding: 50px;
  font-size: 2rem;
  width: 650px;
  height: 50px;
  outline: none;
  p {
    color: black;
    font-size: 12px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  width: 100px;
  height: 100px;
  font-size: 100px;
  color: white;
  background-color: transparent;
  border: 3px solid yellow;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export {
  Container,
  Title,
  SearchContainer,
  SearchListWrapper,
  SearchLayout,
  SearchButton,
};
