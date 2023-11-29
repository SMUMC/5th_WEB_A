import axios from "axios";
import { useEffect, useState } from "react";
import { Throttle } from "../util/useThrottle";

function useCustomGetDataThrottle({ type, language, page, setPage }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    if (!hasMore) return;

    const url = `${process.env.REACT_APP_MOVIE_BASE_URL}${type}?language=${language}&page=${page}`;
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };
    try {
      setLoading(true);
      const response = await axios(url, options);
      const newData = response.data.results;

      if (response.status !== 200) {
        throw new Error('에러가 발생했습니다!');
      }
      setData((prevData) => [...prevData, ...newData]);
      setHasMore(newData.length > 0);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleScroll = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.documentElement;
    if (window.innerHeight + Math.ceil(scrollTop) >= offsetHeight && scrollTop + window.innerHeight >= scrollHeight - 100) {
      setPage((prevPage) => prevPage + 1);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
    const handleScrollThrottle = Throttle(handleScroll, 900);
    window.addEventListener('scroll', handleScrollThrottle);
    return () => {
      window.removeEventListener('scroll', handleScrollThrottle);
    };
  }, [page]);

  return { loading, error, data };
}

export default useCustomGetDataThrottle;