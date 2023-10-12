import axios from "axios";

export const getTopRatedMovie = async () => {
  const url = `${process.env.REACT_APP_MOVIE_BASE_URL}top_rated?language=ko-KR&page=1`;
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
  try {
    const response = await axios(url, options);
    const movies = response.data.results;

    if (response.status !== 200) {
      throw new Error('에러가 발생했습니다!');
    }
    return movies;
  } catch (e) {
    console.log(e);
  }
};

