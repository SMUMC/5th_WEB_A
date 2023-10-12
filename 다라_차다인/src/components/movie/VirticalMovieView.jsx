import React, { useState } from "react";
import * as S from "./VirticalMovieView.styled";

const VirticalMovieView = ({poster, title, star, detail}) => {
    const [mouse, setMouse] = useState(false);

    return (
        <S.Contianer
            onMouseEnter={() => {setMouse(true)}}
            onMouseLeave={() => {setMouse(false)}}
        >
            <S.Poster src={poster}></S.Poster>
            <S.DescriptionContainer>
                <S.Title>{title}</S.Title>
                <S.Star>⭐ {star}</S.Star>
            </S.DescriptionContainer>

            <S.DetailContents
                style={{visibility : mouse ? "visible" : "hidden"}}
            >
                <S.Title>{title}</S.Title>
                <S.DetailText>{detail.slice(0, 100)}...</S.DetailText>
            </S.DetailContents>
        </S.Contianer>
    );
}

export default VirticalMovieView;