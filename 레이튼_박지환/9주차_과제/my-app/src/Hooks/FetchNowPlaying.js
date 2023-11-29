import axios from "axios";
import { useState, useEffect } from "react";

export function FetchNowPlaying(category) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [throttle, setThrottle] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      setLoad(true);
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${category}`,
        params: { language: "ko-KR", page: currentPage },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      };
      try {
        const response = await axios(options);
        setData((prevData) => [...prevData, ...response.data.results]);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [category, currentPage]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        if (throttle) return; // throttle이 true면 무시
        if (!throttle && !isLoading) {
          // throttle false이고 로딩중일떄
          setThrottle(true); // throttle true로 바꾼다.
          changePage(currentPage + 1); // 페이지 하나 더 불러오기
          console.log("API 요청");
          setTimeout(async () => {
            setThrottle(false); // 다시 throttle false로 만들어서 api 요청
            // 0.5초뒤 콜백함수 실행
          }, 500);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, currentPage, isData, changePage]); // 의존성 배열 요소 추가 api 요청 남발 막기

  return { isData, isLoading };
}
