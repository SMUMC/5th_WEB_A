import * as S from "./Button.styled";

export const Button = ({ title, onClick }) => {
    return (
        <S.Btn
            onClick={onClick}
        >
            {title}
        </S.Btn>
    );
}