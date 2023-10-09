import MovieList from "./Components/MovieList/MovieList";
import { movies } from "./Data/movieDummy";
// App.js는 사실상 최상위 컴포넌트임

function App() {
  const films = movies.results;

  return <MovieList films={films} />;
}

export default App; // 컴포넌트 내보내기
