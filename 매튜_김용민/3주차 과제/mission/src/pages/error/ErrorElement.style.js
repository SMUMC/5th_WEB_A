import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 200px;
  h1 {
    margin-bottom: 10px;
    color: gold;
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

const MovePage = styled(Link)`
  margin-top: 20px;
  color: red;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

export { Container, MovePage };
