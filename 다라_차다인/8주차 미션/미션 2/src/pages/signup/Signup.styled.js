import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.ContainerStyles};
    ${theme.styles.flexCenterColumn};
    width: 500px;
    margin: auto;
    gap: 45px;
    h3 {
        color: ${theme.color.white};
        font-size: 20px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const AlertText = styled.p`
    display: flex;
    color: ${theme.color.fail};
    font-size: 12px;
    padding: 0 10px;
`;

export const Input = styled.input`
    display: flex;
    background-color: white;
    border: none;
    border-radius: 30px;
    padding: 20px;
    width: 100%;
    height: 40px;
    outline: none;

    p {
        color: black;
        font-size: 12px;
    }
`;