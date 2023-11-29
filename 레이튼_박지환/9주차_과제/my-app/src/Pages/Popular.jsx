import { PopularData } from "../Hooks/PopularData";
import MovieList from "../Components/MovieList/MovieList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import * as S from "../Pages/Popular.styled";
import { useState } from "react";
export default function Popular() {
  const { isData, isLoading, currentPage, changePage } = PopularData("popular");
  const [isFirst, setIsFirst] = useState([true]);
  const handleNextButton = () => {
    changePage(currentPage + 1);
    setIsFirst(false);
  };

  const handlePreButton = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      setIsFirst(true);
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
            <button onClick={handlePreButton} disabled={isFirst}>
              이전 페이지
            </button>
            <div>현재페이지 {currentPage}</div>
            <button onClick={handleNextButton}>다음 페이지</button>
          </S.Container>
        </>
      )}
    </>
  );
}
