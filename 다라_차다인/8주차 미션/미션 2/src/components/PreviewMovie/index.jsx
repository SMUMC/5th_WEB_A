import React from "react";
import * as S from "./PreviewMovie.styled";
import { useNavigate } from "react-router-dom";

const PreviewMovieView = (props) => {
    const ImgUrl = process.env.REACT_APP_POSTER_BASE_URL;
    const { id, backdrop_path, poster_path, original_title, vote_average, overview, release_date } = props.movieData;
    const navigate = useNavigate();

    const handleChangePage = () => {
        navigate(`/movie/${id}/${original_title}`, {
            state: {
                backdrop_path: backdrop_path,
                poster_path: poster_path,
                original_title: original_title,
                vote_average: vote_average,
                overview: overview,
                release_date: release_date,
            },
        });
    }

    return (
        <S.Container onClick={handleChangePage}>
            <S.Poster src={ImgUrl + poster_path}></S.Poster>
            <S.DescriptionContainer>
                <p>{original_title}</p>
                <p>⭐ {vote_average}</p>
            </S.DescriptionContainer>

            <S.DetailContents>
                <p>{original_title}</p>
                <S.DetailLayout>
                    <p>{overview}</p>
                </S.DetailLayout>
            </S.DetailContents>
        </S.Container>
    );
};

export default PreviewMovieView;
