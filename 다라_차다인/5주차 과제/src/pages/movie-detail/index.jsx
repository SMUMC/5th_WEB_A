import React, { useEffect, useState } from "react";
import * as S from "./MovieDetail.styled";
import { useLocation } from "react-router-dom";

export const MovieDetail = () => {
    const datam = useLocation().state;
    const imgUrl = process.env.REACT_APP_POSTER_BASE_URL;
    const { backdrop_path, poster_path, original_title, vote_average, overview } = datam;
    const [star, setStar] = useState("");

    useEffect(() => {
        const starString = "⭐".repeat(Math.floor(vote_average));
        setStar(starString);
    }, [vote_average]);

    return (
        <S.Container>
            <S.MovieBackground src={imgUrl + backdrop_path} />
            <S.MovieDataContainer>
                <S.Poster src={imgUrl + poster_path} />
                <S.MovieInfomationContainer>
                    <h3>{original_title}</h3>
                    <h5>평점 {star}</h5>
                    <h5>줄거리</h5>
                    <p>{overview ? overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
                </S.MovieInfomationContainer>
            </S.MovieDataContainer>
        </S.Container>
    );
};
