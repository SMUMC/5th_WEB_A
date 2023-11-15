import styled from "styled-components";
import theme from "../../theme";

export const Background = styled.div`
    ${theme.styles.flexCenterColumn};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.black};
    opacity: 0.8;
`;

export const ModalContainer = styled.div`
    ${theme.styles.flexCenterColumn}
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    padding: 20px;
    gap: 30px;
    background-color: ${theme.color.white};
    border-radius: 5px;
    opacity: 1;

    p {
        color: ${theme.color.black};
        font-size: 18px;
    }
`;

export const ButttonContainer = styled.div`
    ${theme.styles.flexCenterRow};
    gap: 20px;
`;