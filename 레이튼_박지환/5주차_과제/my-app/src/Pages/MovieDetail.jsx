import { useLocation } from "react-router-dom";
import MovieInfo from "../Components/MovieInfo/MovieInfo";

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
