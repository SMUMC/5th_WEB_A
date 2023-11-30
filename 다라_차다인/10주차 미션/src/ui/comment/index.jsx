import { Avatar } from "antd";
import * as S from "./Comment.styled";
import { UserOutlined } from '@ant-design/icons';

export const Comment = ({ name, content }) => {
    return (
        <S.Container>
            <Avatar size={25} icon={<UserOutlined />} />
            <S.TextContainer>
                <h3>{name}</h3>
                <p>{content}</p>
            </S.TextContainer>
        </S.Container>
    );
}