import { useEffect, useState } from 'react';
import MovieList from './Components/MovieList/MovieList';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChUGlS9sMLFj90A1YfI-MyDJhBkKGV_uo-QH_TgG9DE';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const getMovies = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChUGlS9sMLFj90A1YfI-MyDJhBkKGV_uo-QH_TgG9DE',
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error('error:' + err));
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MovieList />
    </>
  );
}
export default App;
