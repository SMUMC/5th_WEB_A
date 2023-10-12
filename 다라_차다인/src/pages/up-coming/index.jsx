import React from "react";
import { useLoaderData } from "react-router-dom";
import { getUpComing } from "../../api/movie/getUpComing";
import * as S from "./UpComing.styled"
import VirticalMovieView from "../../components/movie/VirticalMovieView";

export const loader = () => {
    return getUpComing().then((res) => {
      if (res) {
        return res;
      } else {
        return null;
      }
    });
};

export const UpComing = () => {
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
