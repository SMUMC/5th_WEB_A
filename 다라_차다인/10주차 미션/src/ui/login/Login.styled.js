import styled from "styled-components";
import { Input, Button, Typography } from "antd";

const { Text } = Typography;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 200px;
    gap: 30px;
    background-color: white;
`;

export const Title = styled.h4`
    display: flex;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmailInput = styled(Input)`
    display: flex;
    border-bottom: 1px solid #f5f5f5;
`;

export const PasswordInput = styled(Input.Password)`
    display: flex;
    border-bottom: 1px solid #f5f5f5;
`;

export const LoginButton = styled(Button)`
    display: flex;
    width: 80px;
`;

export const SignupButton = styled(Button)`
    display: flex;
    padding: 5px;
    width: 120px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ErrorText = styled(Text)`
    font-size: 12px;
`;
