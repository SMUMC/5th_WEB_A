import { Input, Button, Typography, Checkbox } from "antd";
import * as S from "./Signup.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./schema";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/signup";

const { Text } = Typography;

export const Signup = () => {
    const [agreement, setAgreement] = useState(false);
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isSubmitted, isValid },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onChange = (e) => {
        setAgreement(e.target.checked);
    };

    const onSubmit = useCallback(async (value) => {
        if (!agreement) {
            alert("D Talk 가입에 동의해야 합니다!");
        } else {
            const res = await signup(value);
            if (res) {
                alert("가입되었습니다!");
                navigate("/");
            }
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.Container>
                <S.InputContainer>
                    <h4>이메일</h4>
                    <Controller
                        render={({ field }) => <Input {...field} size="large" />}
                        type="text"
                        name="email"
                        control={control}
                        placeholder="이메일 입력"
                        defaultValue=""
                    />
                    {errors.email?.message && <Text type="danger">{errors.email?.message}</Text>}
                    <h4>닉네임 입력</h4>
                    <Controller
                        render={({ field }) => <Input {...field} size="large" />}
                        type="text"
                        name="username"
                        control={control}
                        placeholder="닉네임 입력"
                        defaultValue=""
                    />
                    {errors.username?.message && <Text type="danger">{errors.username?.message}</Text>}
                    <h4>이름 입력</h4>
                    <Controller
                        render={({ field }) => <Input {...field} size="large" />}
                        type="text"
                        name="firstName"
                        control={control}
                        placeholder="이름 입력"
                        defaultValue=""
                    />
                    {errors.firstName?.message && <Text type="danger">{errors.firstName?.message}</Text>}
                    <h4>성 입력</h4>
                    <Controller
                        render={({ field }) => <Input {...field} size="large" />}
                        type="text"
                        name="lastName"
                        control={control}
                        placeholder="성 입력"
                        defaultValue=""
                    />
                    {errors.lastName?.message && <Text type="danger">{errors.lastName?.message}</Text>}
                    <h4>나이 입력</h4>
                    <Controller
                        render={({ field }) => <Input {...field} size="large" />}
                        type="text"
                        name="age"
                        control={control}
                        placeholder="나이 입력"
                        defaultValue=""
                    />
                    {errors.age?.message && <Text type="danger">{errors.age?.message}</Text>}
                    <h4>비밀번호</h4>
                    <Controller
                        render={({ field }) => <Input.Password {...field} size="large" />}
                        type="text"
                        name="password"
                        control={control}
                        placeholder="비밀번호 입력"
                        defaultValue=""
                    />
                    {errors.password?.message && <Text type="danger">{errors.password?.message}</Text>}
                    <h4>비밀번호 확인</h4>
                    <Controller
                        render={({ field }) => <Input.Password {...field} size="large" />}
                        type="text"
                        name="checkedpassword"
                        control={control}
                        placeholder="비밀번호 재입력"
                        defaultValue=""
                    />
                    {errors.checkedpassword?.message && <Text type="danger">{errors.checkedpassword?.message}</Text>}
                </S.InputContainer>
                <Checkbox name="agreement" onChange={onChange}>D Talk 가입에 동의하시겠습니까?</Checkbox>
                <Button
                    type="primary"
                    size={"large"}
                    disabled={!isValid}
                    htmlType="submit"
                >제출하기</Button>
            </S.Container>
        </form>
    );
}