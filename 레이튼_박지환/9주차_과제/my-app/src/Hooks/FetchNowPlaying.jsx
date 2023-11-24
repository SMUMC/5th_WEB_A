import axios from "axios";
import { useState, useEffect } from "react";

export function FetchNowPlaying(category) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 200
      ) {
        // innnerHeight 현재 페이지 높이
        // window.scrollY 스크롤된 y축 길이
        // 스크롤이 페이지 끝에 도달하면 다음 페이지를 가져온다.
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isData, isLoading };
}
