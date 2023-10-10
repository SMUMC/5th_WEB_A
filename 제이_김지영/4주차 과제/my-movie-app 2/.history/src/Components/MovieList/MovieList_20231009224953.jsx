import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

function MovieList({ films }) {
  console.log(films);
  return (
    <S.Container>
      {films.map((film) => (
        <div>{film}</div>
      ))}
    </S.Container>
  );
}

export default MovieList;
