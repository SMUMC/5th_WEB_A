import styled from "styled-components";
import { Button, Card } from 'antd';

export const Container = styled.div`
    width: 100%;
`;

export const ButtonCard = styled(Card)`
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 20px 0;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 15px;

    h3 {
        display: flex;
        margin: 0px;
    }
`;

export const ContentCard = styled(Card)``;

export const Img = styled.img`
    max-width: 420px;
    padding: 15px;
`;

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    gap: 15px;
`;

export const MenuBtn = styled(Button)`
    background-color: rgba(38, 38, 38, 0);
    color: white;
    border: none;
`
