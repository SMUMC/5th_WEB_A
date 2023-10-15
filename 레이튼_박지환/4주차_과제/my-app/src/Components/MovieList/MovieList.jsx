import MovieContainer from "../MovieContainer/MovieContainer";
import { MovieListStyle } from "./MovieList.style";

function MovieList({ films }) {
  return (
    <div className="App">
      <MovieListStyle>
        {films.map((film) => {
          // map은 films를 순회하면서 각각 film값을 확인한다.
          const { id } = film; // 구조 분해 할당
          return <MovieContainer key={id} film={film} />;
        })}
      </MovieListStyle>
    </div>
  );
}

export default MovieList;
