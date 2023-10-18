import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Title = styled.h1`
    display: flex;
    font-size: 50px;
    color: white;
`;

export const Content = styled(Title)`
    font-size: 20px;
`;

export const LinkLayout = styled(NavLink)`
    display: flex;
    font-size: 30px;
    color: white;
    text-decoration: none;
`;
