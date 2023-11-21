import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.ContainerStyles};
`;

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;