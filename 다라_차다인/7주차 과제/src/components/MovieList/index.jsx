import React from "react";
import PreviewMovieView from "../../components/PreviewMovie/index";
import { useLoaderData } from "react-router-dom";
import * as S from "./MovieList.styled";

export const MovieList = () => {
    const datam = useLoaderData();

    return (
        <S.MovieListContainer>
            {datam.map((item) => (
                <PreviewMovieView key={item.id} movieData={item} />
            ))}
        </S.MovieListContainer>
    );
};
