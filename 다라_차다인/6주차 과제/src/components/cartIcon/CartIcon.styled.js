import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import theme from "../../theme";

export const Container = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
`;

export const Cart = styled(BsCart2)`
    font-size: 30px;
    color: white;
`;

export const Count = styled.div`
    ${theme.styles.flexCenterColumn}
    position: absolute;
    top: 0px;
    left: 25px;
    width: 20px;
    height: 20px;
    background-color: ${theme.color.highlight};
    border-radius: 50px;

    p {
        color: white;
        font-size: 12px;
    }
`;