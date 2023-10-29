import { FetchData } from "../Hooks/FetchData";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export default function Popular() {
  const { isData, isLoading } = FetchData("popular");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
