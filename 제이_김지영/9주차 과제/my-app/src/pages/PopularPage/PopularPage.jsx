import { FetchData } from "../../Hooks/FetchData";
import MovieList from "../../Components/MovieList/MovieList";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import * as S from "./PopularPage.styled";

export default function TopRated() {
  const [currentPage, setCurrentPage] = useState(1); // for pagination

  const { isData, isLoading } = FetchData("popular", currentPage);

  console.log("current page:", currentPage); //올바르게 찍힘
  //console.log(isData);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    // console.log("current page:", currentPage); //setCurrentPage 적용 중인 타이밍이라 콘솔에는 이전 페이지 넘버가 찍힘
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="test">
      {isLoading ? <LoadingSpinner /> : <MovieList films={isData} />}

      <S.Pagination>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <p style={{ color: "white" }}>{currentPage}</p>
        <button onClick={handleNextPage}>다음 페이지</button>
      </S.Pagination>
    </div>
  );
}
