import React from "react";
import * as S from "./VirticalMovieView.styled";

const VirticalMovieView = (props) => {
    const ImgUrl = process.env.REACT_APP_POSTER_BASE_URL;
    const { poster_path, original_title, vote_average, overview } = props.movieData;

    return (
        <S.Container>
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
}

export default VirticalMovieView;