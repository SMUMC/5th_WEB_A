import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;
  console.log(title, vote_average);

  return (
    <S.Container>
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
    </S.Container>
  );
}

export default Movie;
