import { useLoaderData } from 'react-router-dom';

import Movie from '../Movie/Movie';
import * as S from './MoviesList.style';
// import { movies } from '../../constants/Movies';

const MoviesList = () => {
  // const { results: films } = movies;

  const { results: films } = useLoaderData();

  return (
    <S.Wrapper>
      {films.map((film, index) => (
        <Movie key={index} movieData={film} />
      ))}
    </S.Wrapper>
  );
};

export default MoviesList;
