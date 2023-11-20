import { useState, useEffect } from "react";

export function SearchData(keyword) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    const searchMovie = async () => {
      setLoad(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      };
      const query = encodeURIComponent(keyword);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=ko-KR&page=1`,
          options
        );
        const data = await response.json();
        setData(data.results);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };

    searchMovie();
  }, [keyword]);

  return { isData, isLoading };
}
