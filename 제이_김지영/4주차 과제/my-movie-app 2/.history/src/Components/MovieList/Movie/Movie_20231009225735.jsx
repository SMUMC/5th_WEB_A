import * as S from './Movie.styled';

function Movie(props) {
  console.log(props.film);
  return (
    <S.MovieContainer>
      <h3>{props.film.poster_path}</h3>
    </S.MovieContainer>
  );
}

export default Movie;
