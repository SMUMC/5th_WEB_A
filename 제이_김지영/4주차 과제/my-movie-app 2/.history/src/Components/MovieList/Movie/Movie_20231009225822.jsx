import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path } = props.film;

  return (
    <S.MovieContainer>
      <h3>{poster_path}</h3>
    </S.MovieContainer>
  );
}

export default Movie;
