import React from "react";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  //const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleButtonClick = () => {
    //setIsLoggedIn(!isLoggedIn);
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
            to="/signup"
            onMouseEnter={() => setIsHover0(true)}
            onMouseLeave={() => setIsHover0(false)}
          >
            <button onClick={handleButtonClick}>{buttonText}</button>
          </Link>
        </S.Category>
      </S.Container>
    </div>
  );
}

export default Header;
