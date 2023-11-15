import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    gap: 20px;
`;

export const Input = styled.input`
    display: flex;
    background-color: #373B69;
    border: none;
    border-radius: 30px;
    padding: 20px;
    width: 500px;
    height: 40px;
    outline: none;
    color: white;
`;

export const AlertText = styled.p`
    display: flex;
    color: #EB3232;
    font-size: 12px;
    padding: 0 10px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.loading === "true" ? "gray" : "black"};
    border: none;
    border-radius: 30px;
    padding: 20px;
    width: 500px;
    height: 50px;
    outline: none;

    color: white;
    font-size: 17px;
    cursor: pointer;
`;