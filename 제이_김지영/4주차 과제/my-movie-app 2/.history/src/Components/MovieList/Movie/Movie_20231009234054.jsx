import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;
  console.log(title, vote_average);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={`${title} 이미지`}
        />
      </S.ImageContainer>

      <S.MovieDescription>
        <h3>{title}</h3>
        <h3>{vote_average}</h3>
      </S.MovieDescription>
    </S.Container>
  );
}

export default Movie;
