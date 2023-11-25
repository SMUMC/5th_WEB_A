import { FetchNowPlaying } from "../Hooks/FetchNowPlaying";
import MovieList from "../Components/MovieList/MovieList";
import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [throttle, setThrottle] = useState(false);
  const { isData, currentPage, changePage, isLoading } =
    FetchNowPlaying("now_playing");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        if (throttle) return; // throttle이 true면 무시
        if (!throttle) {
          // throttle false일 때
          setThrottle(true); // throttle true로 바꾼다.
          setTimeout(async () => {
            // 0.5초뒤 콜백함수 실행
            changePage(currentPage + 1); // 페이지 하나 더 불러오기
            console.log("API 요청");
            setThrottle(false);
          }, 500);
        }
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
