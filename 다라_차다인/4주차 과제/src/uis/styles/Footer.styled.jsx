import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    height: 30px;
    background-color: #1a1c3a;
`;

export const Contents = styled.p`
    display: flex;
    font-size: 14px;
    color: white;
    cursor: pointer;
`;