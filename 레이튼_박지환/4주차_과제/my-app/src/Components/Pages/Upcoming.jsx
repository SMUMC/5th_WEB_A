import { FetchData } from "../Hooks/FetchData";
import MovieList from "../MovieList/MovieList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function UpComing() {
  const { isData, isLoading } = FetchData("upcoming");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
