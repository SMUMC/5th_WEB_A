import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/Navbar/Navbar.style";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <S.loginButton onClick={() => setIsLogin(false)}>로그아웃</S.loginButton>
  ) : (
    <S.loginButton onClick={() => setIsLogin(true)}>로그인</S.loginButton>
  );
}
