import axios from 'axios';

export const fetchGenreMovies = async ({ type, language, page }) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=${language}&page=${page}`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios(url, options);
    const data = response.data.results;
    console.log(data);
    if (response.status !== 200) {
      throw new Error('데이터를 받아오는데 문제가 발생하였습니다.');
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSingleMovie = async ({ type, language, page }) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=${language}&page=${page}`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };
  try {
    const response = await axios(url, options);
    const data = response.data.results;
    console.log(data);
    if (response.status !== 200) {
      throw new Error('데이터를 받아오는데 문제가 발생하였습니다.');
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
