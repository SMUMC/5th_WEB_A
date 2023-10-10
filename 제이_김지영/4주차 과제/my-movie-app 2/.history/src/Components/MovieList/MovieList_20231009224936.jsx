import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

function MovieList({ films }) {
  console.log(films);
  return (
    <S.Container>
      <Movie />
    </S.Container>
  );
}

export default MovieList;
