import { FetchData } from "../Hooks/FetchData";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export default function TopRated() {
  const { isData, isLoading } = FetchData("top_rated");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
