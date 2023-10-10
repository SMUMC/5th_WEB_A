import MovieList from '../../Components/MovieList/MovieList';

function MainPage({ films }) {
  console.log(films);
  return <MovieList films={films} />;
}

export default MainPage;
