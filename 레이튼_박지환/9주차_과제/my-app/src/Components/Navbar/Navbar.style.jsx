import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: purple;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 320px) {
  }
`;

export const loginButton = styled.button`
  background-color: transparent;
  border: 0;
  color: #c39796;
  margin: 50px;
  &:hover {
    color: #ff9800;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  color: #c39796;
  text-decoration: none;
  margin: 50px;
  &:hover {
    color: #ff9800;
    font-weight: bold;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 320px) {
  }
`;
