import * as S from "./Signup.styled";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            age: null,
            password: "",
            checkpassword: "",
        },
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
                    <S.Input
                        {...register("username")}
                        placeholder="이름을 입력해주세요"
                    />
                    {<S.AlertText>{errors.username?.message}</S.AlertText>}
                    <S.Input
                        {...register("email")}
                        placeholder="이메일을 입력해주세요"
                    />
                    {<S.AlertText>{errors.email?.message}</S.AlertText>}
                    <S.Input
                        {...register("age")}
                        placeholder="나이를 입력해주세요"
                    />
                    {<S.AlertText>{errors.age?.message}</S.AlertText>}
                    <S.Input
                        {...register("password")}
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                    />
                    {<S.AlertText>{errors.password?.message}</S.AlertText>}
                    <S.Input
                        {...register("checkpassword")}
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                    {<S.AlertText>{errors.checkpassword?.message}</S.AlertText>}
                </S.InputContainer>
                <Button title="제출하기" />
            </S.Container>
        </form>
    );
}
