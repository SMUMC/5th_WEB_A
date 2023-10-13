import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 200px;
`;

export const Poster = styled.img`
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 300px;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 10px;
    background-color: #373B69;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    p {
        font-size: 13px;
        color: white;
    }
`;

export const DetailContents = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: black;
    opacity: 0.8;
    border-radius: 5px;

    p {
        padding: 10px 0px;
        font-size: 13px;
        color: white;
    }

    ${Container}:hover & {
        display: block;
    }
`;
