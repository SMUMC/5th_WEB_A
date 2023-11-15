import React, { useState } from "react";
import * as S from "./Navbar.styled";

const Navbar = () => {
    const [login, setLogin] = useState(false);
    return (
        <S.Container>
            <S.Title to="/">Dain Movie</S.Title>
            <S.MenuContainer>
                {/* <S.Contents
                    onClick={() => {
                        setLogin(!login);
                    }}
                >
                    {login ? "로그아웃" : "로그인"}
                </S.Contents> */}
                <S.Contents to="/signup">회원가입</S.Contents>
                <S.Contents to="/popular">Popular</S.Contents>
                <S.Contents to="/nowplaying">Now Playing</S.Contents>
                <S.Contents to="/toprated">Top Rated</S.Contents>
                <S.Contents to="/upcoming">Upcoming</S.Contents>
            </S.MenuContainer>
        </S.Container>
    );
};

export default Navbar;
