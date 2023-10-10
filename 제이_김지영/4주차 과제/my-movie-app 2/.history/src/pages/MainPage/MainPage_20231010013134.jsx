import { useEffect, useState } from 'react';
import MovieList from '../../Components/MovieList/MovieList';
import * as S from './MainPage.styled';

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        setIsLoading(false);
      })
      .catch((err) => console.error('error:' + err));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <S.Container>
      <MovieList films={movies} />
    </S.Container>
  );
}

export default MainPage;
