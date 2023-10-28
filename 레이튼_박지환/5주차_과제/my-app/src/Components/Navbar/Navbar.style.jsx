import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: purple;
`;

export const loginButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #c39796;
  &:hover {
    color: #ff9800;
    font-size: 20px;
    cursor: pointer;
  }
  margin: 50px;
`;

export const StyledLink = styled(Link)`
  color: #c39796;
  text-decoration: none;
  &:hover {
    color: #ff9800;
    font-size: 20px;
    cursor: pointer;
  }
  margin: 50px;
`;
