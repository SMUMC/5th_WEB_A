import { FetchData } from "../Hooks/FetchData";
import MovieList from "../MovieList/MovieList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Popular() {
  const { isData, isLoading } = FetchData("popular");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
