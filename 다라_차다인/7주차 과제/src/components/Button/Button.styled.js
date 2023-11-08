import styled from "styled-components";
import theme from "../../theme";

export const Btn = styled.button`
    ${theme.styles.flexCenterColumn}
    display: flex;
    background-color: white;
    border: none;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    height: 50px;
    outline: none;

    color: black;
    font-size: 17px;
    cursor: pointer;
`;