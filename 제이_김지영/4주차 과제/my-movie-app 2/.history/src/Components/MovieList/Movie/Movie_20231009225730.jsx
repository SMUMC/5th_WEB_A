import * as S from './Movie.styled';

function Movie(props) {
  console.log(props.film);
  return (
    <S.MovieContainer>
      <div>{props.film.poster_path}</div>
    </S.MovieContainer>
  );
}

export default Movie;
