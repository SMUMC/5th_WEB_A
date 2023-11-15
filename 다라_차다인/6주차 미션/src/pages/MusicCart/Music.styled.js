import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn};
    padding: 100px 0px;
    gap: 20px;
`;

export const Title = styled.p`
    font-size: 30px;
    color: ${theme.color.titleText};
`;

export const MusicContainer = styled.div`
    margin: 30px 0px; 
`;

export const HorizontalLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 580px;
    border-top: 1px solid ${theme.color.titleText};
    
    p {
        font-size: 14px; 
        color: ${theme.color.titleText};
        padding: 10px;
    }
`;

