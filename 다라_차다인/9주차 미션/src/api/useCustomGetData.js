import axios from "axios";
import { useEffect, useState } from "react";

function useCustomGetData({ type, language, page }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
        const data = response.data.results;

        if (response.status !== 200) {
          throw new Error('에러가 발생했습니다!');
        }
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);
  return { loading, error, data };
}

export default useCustomGetData;