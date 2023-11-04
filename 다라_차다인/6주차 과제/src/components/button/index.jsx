import * as S from "./Button.styled";

export const Button = ({title, onClick}) => {
    return (
        <S.Button onClick={onClick}>{title}</S.Button>
    );
};