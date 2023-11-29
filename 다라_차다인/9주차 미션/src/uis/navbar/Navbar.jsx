import React from "react";
import * as S from "./Navbar.styled";
import { logout } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.login.isLogin);

    const onClickLogout = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            dispatch(logout());
            alert("로그아웃 되었습니다.");
        }
    };

    return (
        <S.Container>
            <S.Title to="/">Dain Movie</S.Title>
            <S.MenuContainer>
                {isLogin ? <S.Contents onClick={onClickLogout}>로그아웃</S.Contents> :
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
