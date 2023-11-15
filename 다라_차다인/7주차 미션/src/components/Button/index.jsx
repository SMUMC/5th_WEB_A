import * as S from "./Button.styled";

export const Button = ({ title, onClick, disabled, isValidate }) => {
    return (
        <S.Btn
            onClick={onClick}
            disabled={disabled}
            $isValidate={isValidate}
        >
            {title}
        </S.Btn>
    );
}