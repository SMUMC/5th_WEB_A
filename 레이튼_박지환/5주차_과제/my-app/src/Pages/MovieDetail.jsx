import { useLocation } from "react-router-dom";
import MovieInfo from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/MovieInfo/MovieInfo";

export default function MovieDetail() {
  const { state } = useLocation();
  const { vote_average, poster_path, title, overview } = state.film;
  return (
    <MovieInfo
      vote_average={vote_average}
      poster_path={poster_path}
      title={title}
      overview={overview}
    />
  );
}
