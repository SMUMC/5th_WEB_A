import React from "react";
import { useLoaderData } from "react-router-dom";
import { movieDummy } from "../../api/movie/movieDummy";
import * as S from  "./NowPlaying.styled";
import VirticalMovieView from "../../components/movie/VirticalMovieView";

export const loader = () => {
    return movieDummy().then((res) => {
      if (res) {
        return res;
      } else {
        return null;
      }
    });
};

export const Nowplaying = () => {
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
