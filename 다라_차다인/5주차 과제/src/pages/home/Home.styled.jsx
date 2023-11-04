import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    gap: 10px;
`;

export const SearchContainer = styled.div`
    ${theme.styles.flexCenter};
    padding: 40px;
`;
