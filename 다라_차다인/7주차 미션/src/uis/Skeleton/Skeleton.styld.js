import styled, { keyframes } from "styled-components";
import theme from "../../theme";

const pluse = keyframes`
    0% {
      background-color: ${theme.color.content};
    }
  
    50% {
      background-color: ${theme.color.skeletonBg};
    }
  
    100% {
      background-color: ${theme.color.content};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

export const Poster = styled.div`
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 300px;
    background-color: ${theme.color.content};

    animation: ${pluse} 2s infinite ease-in-out;
`;

export const DescriptionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 10px;
    background-color: ${theme.color.content};
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

export const DetailContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

export const TitleLayout = styled.div`
    display: flex;
    margin-top: 5px;
    width: 70%;
    height: 20px;
    border-radius: 5px;
    background-color: ${theme.color.content};

    animation: ${pluse} 2s infinite ease-in-out;
`;

export const StarLayout = styled.div`
    display: flex;
    margin-top: 5px;
    width: 20%;
    height: 20px;
    border-radius: 5px;
    background-color: ${theme.color.content};

    animation: ${pluse} 2s infinite ease-in-out;
`;