import { useState, useEffect } from "react";

export function useMovieSearch(keyword) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchMovie = async () => {
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
      } catch (error) {
        console.error(error);
      }
    };

    searchMovie();
  }, [keyword]);

  return data;
}
