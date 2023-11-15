import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterRow}
    height: 60px;
    width: 100vw;
    background-color: ${theme.color.navbar};
`;

export const ContentsContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 30px;
        color: ${theme.color.white};
    }
`;


