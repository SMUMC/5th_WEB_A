import { PopularData } from "../Hooks/PopularData";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import * as S from "../Pages/Popular.styled";
export default function Popular() {
  const { isData, isLoading, currentPage, changePage } = PopularData("popular");

  const handleNextButton = () => {
    changePage(currentPage + 1);
  };

  const handlePreButton = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <MovieList films={isData} />
          <S.Container>
            <button onClick={handlePreButton}>이전 페이지</button>
            <div>현재페이지 {currentPage}</div>
            <button onClick={handleNextButton}>다음 페이지</button>
          </S.Container>
        </>
      )}
    </>
  );
}
