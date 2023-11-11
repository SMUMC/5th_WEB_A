import { forwardRef } from "react";
import * as S from "./InputText.styled";

const Input = forwardRef(({ placeholder, register, ...props }, ref) => {
    return <S.Input ref={ref} {...props} placeholder={placeholder} />
});

export default Input;