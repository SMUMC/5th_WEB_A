import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;

  return (
    <S.MovieContainer>
      <h3>{poster_path}</h3>
    </S.MovieContainer>
  );
}

export default Movie;
