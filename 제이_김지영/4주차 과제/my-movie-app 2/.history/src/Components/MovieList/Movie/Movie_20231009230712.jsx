import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;

  return (
    <S.Container>
      <S.MovieContainer>
        <S.ImageContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} 이미지`}
          />
        </S.ImageContainer>

        <S.MovieDescription>
          <p>{title}</p>
          <p>{vote_average}</p>
        </S.MovieDescription>
      </S.MovieContainer>
    </S.Container>
  );
}

export default Movie;
