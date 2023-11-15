import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenter};
    background-color: black;
    height: 300px;
`;

export const Content = styled.h1`
    display: flex;
    font-size: 30px;
    color: white;
`;
