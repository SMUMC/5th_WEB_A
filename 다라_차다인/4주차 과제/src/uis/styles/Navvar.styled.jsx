import styled from "styled-components";

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
    padding: 10px 20px;
    height: 30px;
    background-color: #1a1c3a;
`;

export const MenuContianer = styled.div`
    display: flex;
    gap: 30px;
`;

export const Title = styled.h1`
    display: flex;
    font-size: 20px;
    color: white;
    cursor: pointer;
`;

export const Contents = styled.p`
    display: flex;
    font-size: 16px;
    color: white;
    cursor: pointer;

    &:hover {
        font-size: 17px;
        font-weight: 800;
    }
`;