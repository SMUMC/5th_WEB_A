import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.ContainerStyles};
    flex-direction: column;
`;

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const LoadingSpinnerContainer = styled.div`
    ${theme.styles.flexCenterColumn}
`;