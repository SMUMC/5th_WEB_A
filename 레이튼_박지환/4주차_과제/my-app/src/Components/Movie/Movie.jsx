import { MoviesStyle, MoviesImgStyle, MoviesInfoStyle } from "./Movie.style";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, posterPath, voteAverage }) {
  return (
    <MoviesStyle>
      <MoviesImgStyle
        className="movies_img"
        src={`${IMAGE_URL}${posterPath}`}
        alt={title}
      ></MoviesImgStyle>
      <MoviesInfoStyle>
        <h5>{title}</h5>
        <p>{voteAverage}</p>
      </MoviesInfoStyle>
    </MoviesStyle>
  );
}

export default Movie;
