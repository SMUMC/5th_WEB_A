import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function NowPlaying() {
  const [isLoading, setLoad] = useState(true);
  const [now_playing, setNow] = useState([]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      setLoad(true); // api호출전 true로 변경해 로딩창 띄우기
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "ko-KR", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDAxZmJkNTVkNmQ4YjZjNTQ0OThjYWNmYWE1YTMwNyIsInN1YiI6IjY1MWUzOGU1YzUwYWQyMDBjOTFkZTYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0FPSfmHJ6rm3lFtwRATxvfymDx_IU1zKU7RZxQXuC6c",
        },
      };
      try {
        const response = await axios(options);
        setNow(response.data.results);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNowPlaying();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <MovieList films={now_playing} />
    </>
  );
}
