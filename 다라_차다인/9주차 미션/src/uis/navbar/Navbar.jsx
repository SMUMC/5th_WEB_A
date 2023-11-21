import React, { useEffect, useState } from "react";
import * as S from "./Navbar.styled";

const Navbar = () => {
    const accessToken = localStorage.getItem("accessToken");

    const onClickLogout = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.clear();
            alert("로그아웃 되었습니다.");
            window.location.replace("/");
        }
    };

    return (
        <S.Container>
            <S.Title to="/">Dain Movie</S.Title>
            <S.MenuContainer>
                {accessToken ? <S.Contents onClick={onClickLogout}>로그아웃</S.Contents> :
                    <>
                        <S.Contents to="/login">로그인</S.Contents>
                        <S.Contents to="/signup">회원가입</S.Contents>
                    </>
                }
                <S.Contents to="/popular">Popular</S.Contents>
                <S.Contents to="/nowplaying">Now Playing</S.Contents>
                <S.Contents to="/toprated">Top Rated</S.Contents>
                <S.Contents to="/upcoming">Upcoming</S.Contents>
            </S.MenuContainer>
        </S.Container>
    );
};

export default Navbar;
