import { FetchNowPlaying } from "../Hooks/FetchNowPlaying";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export default function NowPlaying() {
  const { isData, isLoading } = FetchNowPlaying("now_playing");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
