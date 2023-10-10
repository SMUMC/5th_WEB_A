import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

function MovieList({ films }) {
  return (
    <S.Container>
      <Movie films={films} />
    </S.Container>
  );
}

export default MovieList;
