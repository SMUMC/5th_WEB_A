import { FetchNowPlaying } from "../Hooks/FetchNowPlaying";
import MovieList from "../Components/MovieList/MovieList";
import { useEffect } from "react";

export default function NowPlaying() {
  const { isData, currentPage, changePage, isLoading } =
    FetchNowPlaying("now_playing");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        changePage(currentPage + 1);
        console.log("API 요청");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isData]);
  console.log(isLoading);
  return (
    <>
      <MovieList films={isData} />
    </>
  );
}
