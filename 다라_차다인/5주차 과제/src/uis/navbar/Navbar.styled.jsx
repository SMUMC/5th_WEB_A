import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../theme";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    height: 30px;
    background-color: ${theme["primary/nb"]};
`;

export const MenuContainer = styled.div`
    display: flex;
    gap: 30px;
`;

export const Title = styled(NavLink)`
    display: flex;
    font-size: 20px;
    color: white;
    cursor: pointer;
    text-decoration-line: none;
`;

export const Contents = styled(NavLink)`
    display: flex;
    font-size: 16px;
    color: white;
    cursor: pointer;
    text-decoration-line: none;

    &:hover {
        font-size: 17px;
        font-weight: 800;
    }

    &.active {
        color: ${theme["highlight/gold"]};
        font-weight: 800;
    }
`;
