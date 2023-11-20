import { useState } from "react";
import * as S from "./Login.styled";
import { loginUser } from "../../redux/actions/loginUser";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";

export const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);
    const isLogin = useSelector((state) => state.user.isLogin);
    const userId = useSelector((state) => state.user.userId);

    const onLogout = () => {
        setId("");
        setPassword("");
        dispatch(logout());
        localStorage.clear();
    }

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
            {!isLogin ?
                <>
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
                </> :
                <>
                    <p>환영합니다 {userId}님 !</p>
                    <S.Button
                        onClick={() => {
                            if (window.confirm("로그아웃 하시겠습니까?")) {
                                onLogout();
                            }
                        }}
                    >로그아웃</S.Button>
                </>}
        </S.Container>
    );
}