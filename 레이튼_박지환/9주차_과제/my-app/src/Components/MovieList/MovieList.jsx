import MovieContainer from "../MovieContainer/MovieContainer";
import * as S from "../MovieList/MovieList.style";

export default function MovieList({ films }) {
  return (
    <S.MovieListStyle>
      {films.map((film, index) => {
        // map은 films를 순회하면서 각각 film값을 확인한다.
        const { id } = film; // 구조 분해 할당
        return <MovieContainer key={`${index}_${id}`} film={film} />;
      })}
    </S.MovieListStyle>
  );
}
