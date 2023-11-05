import React from "react";
import * as S from "./styles/Navbar.styled";

const Navbar = () => {
    return (
        <S.Container>
            <S.Title to="/">Dain Movie</S.Title>
            <S.MenuContainer>
                <S.Contents to="/popular">
                    Popular
                </S.Contents>
                <S.Contents to="/nowplaying">
                    Now Playing
                </S.Contents>
                <S.Contents to="/toprated">
                    Top Rated
                </S.Contents>
                <S.Contents to="/upcoming">
                    Upcoming
                </S.Contents>
            </S.MenuContainer>
        </S.Container>
    );
}

export default Navbar;