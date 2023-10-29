import { FetchData } from "../Hooks/FetchData";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

export default function UpComing() {
  const { isData, isLoading } = FetchData("upcoming");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
