import * as S from "./InputText.styled";

export const Input = ({
    placeholder = "여기에 입력해주세요",
    type = "text",
    onChange,
}) => {
    return (
        <S.Input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};