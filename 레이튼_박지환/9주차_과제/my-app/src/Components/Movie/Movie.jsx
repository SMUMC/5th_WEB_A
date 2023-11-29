import * as S from "../Movie/Movie.style";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, posterPath, voteAverage }) {
  return (
    <S.MoviesStyle>
      {posterPath === null ? (
        <S.BasicImg>이미지가 없어요!</S.BasicImg>
      ) : (
        <img src={`${IMAGE_URL}${posterPath}`} alt={title} />
      )}
      <span>
        <h5>{title}</h5>
        <p>{voteAverage}</p>
      </span>
    </S.MoviesStyle>
  );
}

export default Movie;
