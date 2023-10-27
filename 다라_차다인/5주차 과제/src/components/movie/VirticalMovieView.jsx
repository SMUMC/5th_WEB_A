import React from "react";
import * as S from "./VirticalMovieView.styled";
import { useNavigate } from "react-router-dom";

const VirticalMovieView = (props) => {
    const ImgUrl = process.env.REACT_APP_POSTER_BASE_URL;
    const { id, backdrop_path, poster_path, original_title, vote_average, overview } = props.movieData;
    const navigate = useNavigate();

    const handleChangePage = () => {
        navigate(`/movie/${id}/${original_title}`, {
            state: {
                backdrop_path: backdrop_path,
                poster_path: poster_path,
                original_title: original_title,
                vote_average: vote_average,
                overview: overview,
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

export default VirticalMovieView;
