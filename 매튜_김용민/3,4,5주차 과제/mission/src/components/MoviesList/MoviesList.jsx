import { useLoaderData } from 'react-router-dom';

import Movie from '../Movie/Movie';
import * as S from './MoviesList.style';

const MoviesList = () => {
  const films = useLoaderData();

  return (
    <S.Wrapper>
      {films.map((film, index) => (
        <Movie key={index} movieData={film} />
      ))}
    </S.Wrapper>
  );
};

export default MoviesList;
