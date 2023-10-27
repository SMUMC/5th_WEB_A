import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Logo = styled(NavLink)`
  font-size: 2rem;
  color: gold;
  text-decoration: none;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  color: white;
  border: none;

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

const NavMenu = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: 800;
    color: gold;
    border-bottom: 2px solid gold;
    margin-top: 3px;
  }

  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;

export { NavbarContainer, LoginButton, Logo, MainNav, NavLi, NavMenu };
