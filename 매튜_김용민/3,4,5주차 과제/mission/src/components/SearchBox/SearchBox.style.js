import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  display: flex;
  font-size: 40px;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  gap: 20px;
`;
const SearchLayout = styled.input`
  display: flex;
  background-color: white;
  border: none;
  border-radius: 30px;
  padding: 20px;
  width: 450px;
  height: 40px;
  outline: none;
  p {
    color: black;
    font-size: 12px;
  }
`;

const SearchButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  color: gold;
  cursor: pointer;
`;

export { Container, Title, SearchContainer, SearchLayout, SearchButton };
