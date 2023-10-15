import { FetchData } from "../../Hooks/FetchData";
import MovieList from "../../Components/MovieList/MovieList";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

export default function NowPlaying() {
  const { isData, isLoading } = FetchData("now_playing");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}