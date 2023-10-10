import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average } = props.film;

  return (
    <S.MovieContainer>
      <div>
        <img src={poster_path} alt={`${title} 이미지`} />
      </div>
    </S.MovieContainer>
  );
}

export default Movie;
