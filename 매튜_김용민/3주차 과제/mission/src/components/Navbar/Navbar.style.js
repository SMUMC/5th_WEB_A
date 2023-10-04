import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  background-color: #000080;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: gold;
  text-decoration: none;
  cursor: pointer;
`;

const MainNav = styled.ul`
  list-style: none;
  display: flex;
  font-size: 2rem;
  gap: 5rem;
`;

const NavLi = styled.li`
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: gold;

  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;

export { NavbarContainer, Logo, MainNav, NavLi, NavLink };
