import MovieContainer from "./Components/MovieContainer";
import { movies } from "./Datas/movieDummy";
// App.js는 사실상 최상위 컴포넌트임

function App() {
  const films = movies.results;

  return (
    <div className="App">
      {/* 아래 부분도 MovieList로 component 분해하면 더 좋다. 최상위 컴포넌트는 깔끔한게 조음! */}
      <div className="app_container">
        {films.map((film) => {
          // map은 films를 순회하면서 각각 film값을 확인한다.
          const { id } = film; // 구조 분해 할당
          return <MovieContainer key={id} film={film} />;
        })}
      </div>
    </div>
  );
}

export default App; // 컴포넌트 내보내기
