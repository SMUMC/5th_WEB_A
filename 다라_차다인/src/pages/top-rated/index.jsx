import React from "react";
import { useLoaderData } from "react-router-dom";
import { getTopRatedMovie } from "../../api/movie/getTopRatedMovie";
import * as S from "./TopRated.styled"
import VirticalMovieView from "../../components/movie/VirticalMovieView";

export const loader = () => {
    return getTopRatedMovie().then((res) => {
      if (res) {
        return res;
      } else {
        return null;
      }
    });
};

export const TopRated = () => {
    const movieData = useLoaderData();

    return (
      <S.Contaier>
        <S.MovieListContainer>
          {movieData && movieData.map((item) => (
              <VirticalMovieView
                key={item.id}
                poster={process.env.REACT_APP_POSTER_BASE_URL + item.poster_path} 
                title={item.original_title}
                star={item.vote_average}
                detail={item.overview}
              />
            )
          )}
        </S.MovieListContainer>
      </S.Contaier>
  );
}
