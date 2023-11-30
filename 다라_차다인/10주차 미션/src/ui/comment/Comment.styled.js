import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 15px;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        margin: 0px;
        font-size: 17px;
    }

    p {
        margin: 0px;
        font-size: 15px;
    }
`;