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

        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
         
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
        font-size: 13px;
        color: white;  
    }
    ${Container}:hover & {
        display: block;
    }
`;

export const DetailLayout = styled.div`
    margin-top: 10px;

    p {
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
         
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
    }
`;