import styled from "styled-components";

export const Contianer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 200px;
`;

export const Poster = styled.img`
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
`;

export const Title = styled.p`
    display: flex;
    font-size: 13px;
    color: white;
`;

export const Star = styled(Title)``;

export const DetailText = styled(Title)``;

export const DetailContents = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 160px;
    height: 90%;
    padding: 20px;
    background-color: black;
    opacity: 0.8;
    border-radius: 5px;
`;
