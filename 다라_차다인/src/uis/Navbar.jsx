import React from "react";
import { useState } from "react";
import * as S from "./styles/Navvar.styled";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(0);

    const goToPopular = () => {
        navigate("/");
        setIsActive(0);
    };

    const goToNowPlaying = () => {
        navigate("/nowplaying");
        setIsActive(1);
    };

    const goToTopRated = () => {
        navigate("/toprated");
        setIsActive(2);
    };

    const goToUpComing = () => {
        navigate("/upcoming");
        setIsActive(3);
    };
    
    return (
        <S.Container>
            <S.Title onClick={goToPopular}>Dain Movie</S.Title>
            <S.MenuContianer>
                <S.Contents 
                    onClick={goToPopular}
                    style={isActive === 0 ? { color: "#FFCD28", fontWeight: 800 } : {}}
                >
                    Popular
                </S.Contents>
                <S.Contents 
                    onClick={goToNowPlaying}
                    style={isActive === 1 ? { color: "#FFCD28", fontWeight: 800} : {}}
                >
                    Now Playing
                </S.Contents>
                <S.Contents 
                    onClick={goToTopRated}
                    style={isActive === 2 ? { color: "#FFCD28", fontWeight: 800 } : {}}
                
                >
                    Top Rated
                </S.Contents>
                <S.Contents 
                    onClick={goToUpComing}
                    style={isActive === 3 ? { color: "#FFCD28", fontWeight: 800 } : {}}
                >
                    Upcoming
                </S.Contents>
            </S.MenuContianer>
        </S.Container>
    );
}

export default Navbar;