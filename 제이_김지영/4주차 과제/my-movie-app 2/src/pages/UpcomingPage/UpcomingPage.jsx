import { useEffect, useState } from 'react';
import MovieList from '../../Components/MovieList/MovieList';
import Loading from '../../Components/Loading/Loading';
import * as S from './UpcomingPage.styled';

function UpcomingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=11';
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
      { isLoading ? <Loading /> : <MovieList films={movies} /> }
    </S.Container>
  );
}

export default UpcomingPage;
