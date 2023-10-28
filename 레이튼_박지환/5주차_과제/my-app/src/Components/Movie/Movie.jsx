import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/Movie/Movie.style";

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
