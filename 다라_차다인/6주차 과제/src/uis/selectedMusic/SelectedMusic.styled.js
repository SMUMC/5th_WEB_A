import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    display: flex;
    width: 600px;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
`;

export const Cover = styled.img`
    display: flex;
    width: 50px;
    height: 50px;

`;

export const ContentsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    h5 {
        font-size: 14px;
        color: ${theme.color.titleText};
    }
    p {
        font-size: 14px;
        color: ${theme.color.priceText};
    }
`;

export const CountContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

