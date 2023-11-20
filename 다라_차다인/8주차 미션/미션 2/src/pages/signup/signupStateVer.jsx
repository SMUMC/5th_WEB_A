import React, { useState } from "react";
import * as S from "./Signup.styled";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordChecked, setPasswordChecked] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [ageErrorMessage, setAgeErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] = useState('');

    const checkName = (e) => {
        const value = e.target.value;
        const regExp = /^[a-zA-Z가-힣]*$/;
        if (value.length === 0) {
            setNameErrorMessage("이름을 입력해주세요");
        }
        else if (!regExp.test(value)) {
            setNameErrorMessage("영어 또는 한글로 입력해주세요");
        } else {
            setNameErrorMessage("");
            setName(value);
        }
    }

    const checkEmail = (e) => {
        const value = e.target.value;
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        if (value.length === 0) {
            setEmailErrorMessage("이메일을 입력해주세요");
        }
        else if (!regExp.test(value)) {
            setEmailErrorMessage("이메일 양식을 맞춰서 @를 꼭 써주세요!");
        } else {
            setEmailErrorMessage("");
            setEmail(value);
        }
    }

    const checkAge = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            setAgeErrorMessage("나이를 입력해주세요");
        }
        else {
            const age = parseFloat(value);
            if (isNaN(value)) {
                setAgeErrorMessage("나이는 정수로만 입력할 수 있습니다");
            }
            else if (0 < age && 1 > age) {
                setAgeErrorMessage("나이를 실수로 입력할 수 없습니다");
            }
            else if (age < 0) {
                setAgeErrorMessage("나이를 음수로 입력할 수 없습니다");
            }
            else if (age <= 19) {
                setAgeErrorMessage("미성년자 가입이 불가능합니다");
            }
            else {
                setAgeErrorMessage("");
                setAge(value);
            }
        }
    }

    const checkPassword = (e) => {
        const value = e.target.value;
        const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
        if (value.length < 4) {
            setPasswordErrorMessage("4자리 이상 입력해주세요");
        }
        else if (value.length > 12) {
            setPasswordErrorMessage("12자리 이상 입력할 수 없습니다");
        }
        else if (!regExp.test(value)) {
            setPasswordErrorMessage("비밀번호는 영어, 숫자, 특수문자를 포함해주세요");
        }
        else {
            setPasswordErrorMessage("");
            setPassword(value);
        }
    }

    const checkPasswordCheck = (e) => {
        const value = e.target.value;
        if (password !== value) {
            setPasswordCheckErrorMessage("비밀번호가 일치하지 않습니다")
        }
        else {
            setPasswordCheckErrorMessage("");
            setPasswordChecked(value);
        }
    }

    const onSubmit = () => {
        if (
            name !== "" &&
            email !== "" &&
            age > 0 &&
            password !== "" &&
            passwordChecked !== ""
        ) {
            alert("가입되었습니다.");
            console.log({
                passwordChecked,
                password,
                email,
                name,
                age
            })
            navigate('/');
        } else {
            alert("입력을 다시 확인해주세요.");
        }
    }

    return (
        <S.Container>
            <h3>회원가입 페이지</h3>
            <S.InputContainer>
                <Input
                    placeholder="이름 입력"
                    value={name}
                    onChange={checkName}
                />
                {nameErrorMessage && <S.AlertText>{nameErrorMessage}</S.AlertText>}
                <Input
                    placeholder="이메일 입력"
                    value={email}
                    type="email"
                    onChange={checkEmail}
                />
                {emailErrorMessage && <S.AlertText>{emailErrorMessage}</S.AlertText>}
                <Input
                    placeholder="나이 입력"
                    value={age}
                    onChange={checkAge}
                />
                {ageErrorMessage && <S.AlertText>{ageErrorMessage}</S.AlertText>}
                <Input
                    placeholder="비밀번호 입력"
                    value={password}
                    type="password"
                    onChange={checkPassword}
                />
                {passwordErrorMessage && <S.AlertText>{passwordErrorMessage}</S.AlertText>}
                <Input
                    placeholder="비밀번호 확인"
                    value={passwordChecked}
                    type="password"
                    onChange={checkPasswordCheck}
                />
                {passwordCheckErrorMessage && <S.AlertText>{passwordCheckErrorMessage}</S.AlertText>}
            </S.InputContainer>
            <Button title="제출하기" onClick={onSubmit} />
        </S.Container>
    );
}
