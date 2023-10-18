import { FetchData } from "../Hooks/FetchData";
import MovieList from "../MovieList/MovieList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function NowPlaying() {
  const { isData, isLoading } = FetchData("now_playing");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
