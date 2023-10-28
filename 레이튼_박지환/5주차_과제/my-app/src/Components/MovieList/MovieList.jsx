import MovieContainer from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/MovieContainer/MovieContainer";
import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/MovieList/MovieList.style";

export default function MovieList({ films }) {
  return (
    <div className="App">
      <S.MovieListStyle>
        {films.map((film) => {
          // map은 films를 순회하면서 각각 film값을 확인한다.
          const { id } = film; // 구조 분해 할당
          return <MovieContainer key={id} film={film} />;
        })}
      </S.MovieListStyle>
    </div>
  );
}
