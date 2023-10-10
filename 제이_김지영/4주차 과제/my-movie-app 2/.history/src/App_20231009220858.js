import { useEffect, useState } from 'react';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChUGlS9sMLFj90A1YfI-MyDJhBkKGV_uo-QH_TgG9DE';

function App() {
  /*
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1); //prev: previous value
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("SEARCH FOR", keyword)
  }, [keyword]);
  */

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {/*
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      */}

      {/* 
      <h1 className="page-title">NETFLIX</h1>
      <MovieList movies={moviesData} /> 
      */}

      {loading ? (
        <span className='msg-loading'>Loading...</span>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
export default App;
