import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
`;

export { Container };
