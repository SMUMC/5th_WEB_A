import { useState } from "react";
import * as S from "./Login.styled";
import { loginUser } from "../../redux/actions/loginUser";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);

    const onSubmit = () => {
        if (id && password) {
            dispatch(loginUser({ id, password }));
        }
        else {
            alert("아이디 및 비밀번호를 입력하세요");
        }
    };

    return (
        <S.Container>
            <S.Input
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <S.Input
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <S.Button
                onClick={onSubmit}
                disabled={loading}
                loading={loading ? "true" : "false"}
            >{loading ? "로딩중.." : "로그인"}</S.Button>
        </S.Container>
    );
}