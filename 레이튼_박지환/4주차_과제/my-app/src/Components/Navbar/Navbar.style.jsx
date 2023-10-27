import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: purple;
`;

const MenuContainer = styled.div`
  display: flex;
`;
const StyledLink = styled(Link)`
  color: #c39796;
  text-decoration: none;
  &:hover {
    color: #ff9800;
    font-size: 20px;
    cursor: pointer;
  }
  margin: 50px;
`;
export { NavContainer, MenuContainer, StyledLink };
