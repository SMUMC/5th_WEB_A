import * as S from "./Navbar.style";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <S.loginButton onClick={() => setIsLogin(false)}>로그아웃</S.loginButton>
  ) : (
    <S.loginButton onClick={() => setIsLogin(true)}>로그인</S.loginButton>
  );
}
