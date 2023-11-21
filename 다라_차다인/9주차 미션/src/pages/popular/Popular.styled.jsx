import styled from "styled-components";
import theme from "../../theme";

export const SkeletonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Container = styled.div`
    ${theme.styles.ContainerStyles};
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

export const PageContainer = styled.div`
    ${theme.styles.flexCenterRow}
    width: 250px;
    padding: 10px 20px;
    justify-content: space-between;
    gap: 30px;

    p {
        display: flex;
        font-size: 20px;
        color: ${theme.color.white};
    }
`;

export const ArrowLeft = styled.h1`
    color: ${(props) => props.page === 1 ? `${theme.color.content}` : `${theme.color.white}`};
    font-size: 20px;
    cursor: pointer;
`;

export const ArrowRight = styled.h1`
    color: ${theme.color.white};
    font-size: 20px;
    cursor: pointer;
`;