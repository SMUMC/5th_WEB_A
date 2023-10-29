import * as S from "../Movie/Movie.style";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, posterPath, voteAverage }) {
  return (
    <S.MoviesStyle>
      <img src={`${IMAGE_URL}${posterPath}`} alt={title} />
      <div>
        <h5>{title}</h5>
        <p>{voteAverage}</p>
      </div>
    </S.MoviesStyle>
  );
}

export default Movie;
