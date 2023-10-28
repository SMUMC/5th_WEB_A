import axios from "axios";
import { useState, useEffect } from "react";

export function FetchData(category) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoad(true);
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${category}`,
        params: { language: "ko-KR", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      };
      try {
        const response = await axios(options);
        setData(response.data.results);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [category]);
  return { isData, isLoading };
}
