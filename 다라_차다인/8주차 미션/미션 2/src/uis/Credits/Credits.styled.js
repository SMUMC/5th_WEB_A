import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn}
    gap: 20px;

    h3 {
        font-size: 20px;
        color: ${theme.color.white};
    }
`;
export const ProfileContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 120px);
    grid-template-rows: repeat(10, 120px);
    justify-items: center;
`;