import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn};
    margin: 70px 0px;
`;

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 890px;
`;

export const LoadingSpinnerContainer = styled.div`
    ${theme.styles.flexCenterColumn}
`;