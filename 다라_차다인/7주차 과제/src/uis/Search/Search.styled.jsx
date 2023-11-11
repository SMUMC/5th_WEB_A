import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn};
    gap: 50px;
`;

export const Title = styled.h3`
    display: flex;
    font-size: 40px;
    color: white;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    padding-left: 50px;
    gap: 20px;
`;

export const SearchLayout = styled.input`
    display: flex;
    background-color: white;
    border: none;
    border-radius: 30px;
    padding: 20px;
    width: 450px;
    height: 40px;
    outline: none;
    p {
        color: black;
        font-size: 12px;
    }
`;

export const SearchButton = styled(IoSearchCircleSharp)`
    display: flex;
    width: 40px;
    height: 40px;
    color: ${theme.color.highlight};
    cursor: pointer;
`;

export const SearchResultContainer = styled.div`
    ${theme.styles.flexCenterRow}
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
    width: 70%;
    height: 600px;
    
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${theme.color.highlight};
        border-radius: 6px;
    }

    background-color: ${theme.color.navbar};
    border-radius: 10px;

    h5 {
        color: ${theme.color.white};
        font-size: 18px;
    }
`;