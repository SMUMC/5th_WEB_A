import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0px;
    gap: 50px;
    background-color: white;
`;

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
        font-size: 17px;
    }
`;

export const HomeSider = styled.div`
    display: flex;
    min-width: 250px;
    padding: 0 20px;
    height: 100%;
    background-color: white;
    border-right: 1px solid #f5f5f5;
`;

export const FollowContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px 20px 20px;
    gap: 20px;
    width: 300px;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
`;