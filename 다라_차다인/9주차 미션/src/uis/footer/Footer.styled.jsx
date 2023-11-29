import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;
    height: 30px;
    background-color: #1a1c3a;

    p {
        font-size: 14px;
        color: white;
    }
`;

export const LinkLayout = styled(Link)`
    display: flex;
    font-size: 14px;
    color: white;
    cursor: pointer;
    text-decoration-line: none;
`;