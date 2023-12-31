import styled from "styled-components";
import theme from "../../theme";

export const Button = styled.button`
    ${theme.styles.flexCenterColumn};
    padding: 5px 10px;
    background-color: ${theme.color.white};
    color: ${theme.color.button};
    border: 1px solid ${theme.color.button};
    border-radius: 5px;
    cursor: pointer;
`;