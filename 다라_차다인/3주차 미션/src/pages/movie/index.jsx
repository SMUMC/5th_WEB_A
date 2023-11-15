import VirticalMovieView from "../../components/VirticalMovieView";
import { useLoaderData } from "react-router-dom";
import * as S from "./Movie.styled";

export const Movie = () => {
    const movieData = useLoaderData();

    return (
      <S.Contaier>
        <S.MovieListContainer>
          {movieData && movieData.map((item, index) => (
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
