import React, { useEffect, useState } from "react";
import * as S from "./MovieDetail.styled";
import { useLocation, useParams } from "react-router-dom";
import { getCredits } from "../../api/getCredits";
import { Credits } from "../../uis/Credits";

export const MovieDetail = () => {
    const state = useLocation().state;
    const { id, title } = useParams();
    const imgUrl = process.env.REACT_APP_POSTER_BASE_URL;
    const { backdrop_path, poster_path, vote_average, overview, release_date } = state;
    const star = vote_average && "⭐".repeat(Math.floor(vote_average));
    const [creditList, setCreditList] = useState([]);

    const getCreditsProps = {
        id: id,
        language: "ko-KR"
    };

    useEffect(() => {
        getCredits(getCreditsProps).then((res) => {
            setCreditList(res);
        })
    }, []);

    return (
        <S.Container>
            <S.MovieInfoContainer>
                <S.MovieBackground src={imgUrl + backdrop_path} />
                <S.MovieDataContainer>
                    <S.Poster src={imgUrl + poster_path} />
                    <S.MovieInfomationContainer>
                        <h3>{title}</h3>
                        <h5>평점 {star}</h5>
                        <h5>개봉일 {release_date}</h5>
                        <h5>줄거리</h5>
                        <p>{overview ? overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</p>
                    </S.MovieInfomationContainer>
                </S.MovieDataContainer>
            </S.MovieInfoContainer>
            <S.CreditsContainer>
                <Credits creditList={creditList} />
            </S.CreditsContainer>
        </S.Container>

    );
};
