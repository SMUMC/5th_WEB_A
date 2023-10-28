import { FetchData } from "../Hooks/FetchData";
import MovieList from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/MovieList/MovieList";
import LoadingSpinner from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/LoadingSpinner/LoadingSpinner";

export default function TopRated() {
  const { isData, isLoading } = FetchData("top_rated");

  return <>{isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}</>;
}
