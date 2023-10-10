import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;

  return (
    <S.Container>
      <S.Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${title} 이미지`}
      />
      <S.MovieDescription>
        <p>{title}</p>
        <h3>{vote_average}</h3>
      </S.MovieDescription>
    </S.Container>
  );
}

export default Movie;
