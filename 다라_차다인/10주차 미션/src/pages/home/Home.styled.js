import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    padding: 30px 0px;
    gap: 50px;
    background-color: white;
`;

export const HomeSider = styled.div`
    display: flex;
    min-width: 250px;
    padding: 0 20px;
    height: 100%;
    background-color: white;
    border-right: 1px solid #f5f5f5;
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    gap: 15px;
`;

export const LoadingSpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;