import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function TopRated() {
  const [topRated, setTop] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      setLoad(true);
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "ko-KR", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDAxZmJkNTVkNmQ4YjZjNTQ0OThjYWNmYWE1YTMwNyIsInN1YiI6IjY1MWUzOGU1YzUwYWQyMDBjOTFkZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0FPSfmHJ6rm3lFtwRATxvfymDx_IU1zKU7RZxQXuC6c",
        },
      };
      try {
        const response = await axios(options);
        setTop(response.data.results);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopular();
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <MovieList films={topRated} />;
    </>
  );
}
