import axios from "axios";
import { useState, useEffect } from "react";

//Fetch Data for Infinite Scroll

const throttle = (func, delay) => {
  let lastExecTime = 0;

  return function () {
    const now = Date.now();

    if (now - lastExecTime >= delay) {
      func.apply(this, arguments);
      lastExecTime = now;
    }
  };
};

export default function FetchData2({ category, page, setPage }) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  const fetchData = async () => {
    setLoad(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${category}`,
      params: { language: "ko-KR", page: page },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
      },
    };
    try {
      const response = await axios(options);
      const newData = response.data.results;

      if (response.status !== 200) {
        throw new Error("에러가 발생했습니다!");
      }
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false); //try문이 실행되든, catch문이 실행되든 finally문 실행
      //try문이나, catch문에서 setLoad(false); 해줄 필요 없음
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
    const handleScrollThrottle = throttle(handleScroll, 900);
    window.addEventListener("scroll", handleScrollThrottle);
    return () => {
      window.removeEventListener("scroll", handleScrollThrottle);
      //removeEventListener return해줘야하는 이유 생각해보기
    };
  }, [page]); // Include currentPage and setPage in the dependencies array

  return { isData, isLoading };
}
