import styled from "styled-components";
import { Layout, Input, Button } from "antd";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export const Container = styled(Header)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    background-color: white;

    p {
        font-size: 13px;
        color: #e3e3e3;
        point: cursor;
    }
`;

export const Title = styled.h3`
    display: flex;
    color: black;
`;

export const TextButton = styled(Button)`
    display: flex;
    color: black;
`;

export const SearchInput = styled(Search)`
    display: flex;
    width: 350px;
`;