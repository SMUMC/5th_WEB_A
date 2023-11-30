import * as S from "./UserFollow.styled";

export const UserFollow = ({ title, count }) => {
    return (
        <S.Container>
            <S.Text>{title}</S.Text>
            <S.Text>{count}</S.Text>
        </S.Container>
    );
}