import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./Login.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { schema } from "../login/schema";
import { loginActions } from "../../redux/actions/loginActions";
import { useDispatch } from "react-redux";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitted, isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (value) => {
        const id = value.userId;
        const password = value.password;
        dispatch(loginActions({ id, password }));
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <h3>로그인 페이지</h3>
                <S.InputContainer>
                    <Input
                        {...register("userId")}
                        placeholder="아이디"
                        aria-invalid={isSubmitted ? (errors.userId?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.userId?.message}
                    />
                    {errors.userId?.message && <S.AlertText>{errors.userId?.message}</S.AlertText>}
                    <Input
                        {...register("password")}
                        placeholder="비밀번호"
                        type="password"
                        aria-invalid={isSubmitted ? (errors.password?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.password?.message}
                    />
                    {errors.password?.message && <S.AlertText>{errors.password?.message}</S.AlertText>}
                </S.InputContainer>
                <Button
                    title="로그인"
                    disabled={isSubmitting}
                    isValidate={isValid}
                />
            </S.Container>
        </form>
    );
}