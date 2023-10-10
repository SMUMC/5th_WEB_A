import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

function MovieList({ films }) {
  console.log(films);
  return <S.Container>{films.map((film) => console.log(film))}</S.Container>;
}

export default MovieList;
