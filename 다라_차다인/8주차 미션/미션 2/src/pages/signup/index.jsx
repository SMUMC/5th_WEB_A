import * as S from "./Signup.styled";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

export const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitted, isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmit = (value) => {
        console.log(value);
        alert("가입되었습니다!");
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <h3>회원가입 페이지</h3>
                <S.InputContainer>
                    <Input
                        {...register("username")}
                        placeholder="이름을 입력해주세요"
                        aria-invalid={isSubmitted ? (errors.username?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.username?.message}
                    />
                    {errors.username?.message && <S.AlertText>{errors.username?.message}</S.AlertText>}
                    <Input
                        {...register("email")}
                        placeholder="이메일을 입력해주세요"
                        aria-invalid={isSubmitted ? (errors.email?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.email?.message}
                    />
                    {errors.email?.message && <S.AlertText>{errors.email?.message}</S.AlertText>}
                    <Input
                        {...register("age")}
                        placeholder="나이를 입력해주세요"
                        aria-invalid={isSubmitted ? (errors.age?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.age?.message}
                    />
                    {errors.age?.message && <S.AlertText>{errors.age?.message}</S.AlertText>}
                    <Input
                        {...register("password")}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        aria-invalid={isSubmitted ? (errors.password?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.password?.message}
                    />
                    {errors.password?.message && <S.AlertText>{errors.password?.message}</S.AlertText>}
                    <Input
                        {...register("checkpassword")}
                        type="password"
                        placeholder="비밀번호 확인"
                        aria-invalid={isSubmitted ? (errors.checkpassword?.message ? "true" : "false") : undefined}
                        aria-describedby={errors.checkpassword?.message}
                    />
                    {errors.checkpassword?.message && <S.AlertText>{errors.checkpassword?.message}</S.AlertText>}
                </S.InputContainer>
                <Button title="제출하기" disabled={isSubmitting} isValidate={isValid} />
            </S.Container>
        </form>
    );
}
