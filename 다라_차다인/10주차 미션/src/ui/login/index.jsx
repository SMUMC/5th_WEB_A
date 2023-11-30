import { Link } from "react-router-dom";
import * as S from "./Login.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../redux/actions/loginActions";
import { useCallback } from "react";

export const Login = () => {
    const loading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitted, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit = useCallback(async (value) => {
        const { username, password } = value;
        dispatch(loginActions({ username, password }));
        alert("로그인 되었습니다.");
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <S.InputContainer>
                    <S.Title>닉네임</S.Title>
                    <Controller
                        render={({ field }) => <S.EmailInput {...field} placeholder="닉네임 입력" bordered={false} />}
                        type="text"
                        name="username"
                        control={control}
                        defaultValue=""
                    />
                    {errors.username?.message && <S.ErrorText type="danger">{errors.username?.message}</S.ErrorText>}
                    <S.Title>비밀번호</S.Title>
                    <Controller
                        render={({ field }) => <S.PasswordInput {...field} placeholder="비밀번호 입력" bordered={false} />}
                        type="text"
                        name="password"
                        control={control}
                        defaultValue=""
                    />
                    {errors.password?.message && <S.ErrorText type="danger">{errors.password?.message}</S.ErrorText>}
                </S.InputContainer>

                <S.ButtonContainer>
                    <S.LoginButton
                        htmlType="submit"
                        loading={loading}
                    >로그인</S.LoginButton>
                    <Link to="/signup">
                        <S.SignupButton type="text">회원이 아니신가요?</S.SignupButton>
                    </Link>
                </S.ButtonContainer>
            </S.Container>
        </form>
    );
}