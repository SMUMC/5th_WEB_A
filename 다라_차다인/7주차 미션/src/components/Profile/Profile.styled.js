import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn}
    gap: 5px;

    p {
        font-size: 13px;
        color: ${theme.color.white};
        text-align: center;
    }
`;

export const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;

    object-fit: cover;
`;