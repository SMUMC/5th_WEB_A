import React from "react";
import * as S from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //isLoggedIn, setIsLoggedIn

function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };

  const logoutHandler = () => {
    navigate("/"); // 로그아웃 후 홈 페이지로 이동

    // 로그아웃 버튼 클릭 시 로컬 스토리지에서 정보 삭제
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    //setIsLoggedIn(false);
    dispatch({ type: "SET_LOGGED_IN", payload: false });

    // 홈페이지로 리다이렉트 또는 다른 로그아웃 관련 동작 수행
  };

  const buttonText = "회원가입"; //isLoggedIn ? "로그아웃" : "로그인";

  const [isHover0, setIsHover0] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  return (
    <div>
      <S.Container>
        <Link to="/">
          <S.Logo>
            <h1>Netflix</h1>
          </S.Logo>
        </Link>
        <S.Category>
          <Link
            to="/popular"
            onMouseEnter={() => setIsHover1(true)}
            onMouseLeave={() => setIsHover1(false)}
          >
            <h1 className={isHover1 ? "hovered1" : ""}>Popular</h1>
          </Link>
          <Link
            to="/nowplaying"
            onMouseEnter={() => setIsHover2(true)}
            onMouseLeave={() => setIsHover2(false)}
          >
            <h1 className={isHover2 ? "hovered2" : ""}>Now Playing</h1>
          </Link>
          <Link
            to="/toprated"
            onMouseEnter={() => setIsHover3(true)}
            onMouseLeave={() => setIsHover3(false)}
          >
            <h1 className={isHover3 ? "hovered3" : ""}>Top Rated</h1>
          </Link>
          <Link
            to="/upcoming"
            onMouseEnter={() => setIsHover4(true)}
            onMouseLeave={() => setIsHover4(false)}
          >
            <h1 className={isHover4 ? "hovered4" : ""}>Upcoming</h1>
          </Link>
          <Link
            to="/login"
            onMouseEnter={() => setIsHover0(true)}
            onMouseLeave={() => setIsHover0(false)}
          >
            <button onClick={isLoggedIn ? logoutHandler : null}>
              {isLoggedIn ? "로그아웃" : "로그인"}
            </button>
          </Link>
          <Link
            to="/signup"
            onMouseEnter={() => setIsHover0(true)}
            onMouseLeave={() => setIsHover0(false)}
          >
            <button>{buttonText}</button>
          </Link>
        </S.Category>
      </S.Container>
    </div>
  );
}

export default Header;
