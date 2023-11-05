import React from "react";
import VirticalMovieView from "../../components/movie/VirticalMovieView";
import { useLoaderData } from "react-router-dom";
import * as S from "./MovieList.styled";

export const MovieList = () => {
    const datam = useLoaderData();
    
    return (
        <S.MovieListContainer>
            {datam.map((item) => (
                <VirticalMovieView
                    key={item.id}
                    movieData={item}
                />
            ))}
      </S.MovieListContainer>
    );
}