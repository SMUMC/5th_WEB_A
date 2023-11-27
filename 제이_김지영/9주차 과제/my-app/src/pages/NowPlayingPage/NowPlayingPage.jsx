import FetchData2 from "../../Hooks/useScrollFetchData";
import MovieList from "../../Components/MovieList/MovieList";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

export default function NowPlaying() {
  const [page, setPage] = useState(1);

  const customGetDataProps = {
    category: "now_playing",
    page: page,
    setPage: setPage,
  };

  const { isData, isLoading } = FetchData2(customGetDataProps); // // Fetch Data for Infinite Scroll

  return (
    <>
      <MovieList films={isData} />
      {isLoading && <LoadingSpinner />}
    </>
  );
}
