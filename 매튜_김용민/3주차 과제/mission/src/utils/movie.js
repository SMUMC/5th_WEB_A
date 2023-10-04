import axios from 'axios';

const theMovieUrl = 'https://api.themoviedb.org/3/movie';

export const customFetch = axios.create({
  baseURL: theMovieUrl,
});
