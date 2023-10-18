import * as S from "./Movie.style";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, posterPath, voteAverage }) {
  return (
    <S.MoviesStyle>
      <S.MoviesImgStyle
        className="/movies_img"
        src={`${IMAGE_URL}${posterPath}`}
        alt={title}
      ></S.MoviesImgStyle>
      <S.MoviesInfoStyle>
        <h5>{title}</h5>
        <p>{voteAverage}</p>
      </S.MoviesInfoStyle>
    </S.MoviesStyle>
  );
}

export default Movie;
