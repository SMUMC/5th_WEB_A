import axios from "axios";

//id로 데이터 받아오기
//https://developer.themoviedb.org/reference/movie-details

export const getMovieDataWithId = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "ko-KR" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
    },
  };

  const result = await axios(options);

  console.log("result: ", result);

  const { poster_path, title, vote_average, overview } = result.data;

  return { poster_path, title, vote_average, overview };
};
