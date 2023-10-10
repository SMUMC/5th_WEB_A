import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;

  return (
    <S.Container>
      <S.MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} 이미지`}
        />
        <div>
          <p>{title}</p>
          <p>{vote_average}</p>
        </div>
      </S.MovieContainer>
    </S.Container>
  );
}

export default Movie;
