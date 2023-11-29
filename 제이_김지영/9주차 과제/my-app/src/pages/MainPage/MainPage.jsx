import * as S from "./MainPage.styled";
import { useSearchData } from "../../Hooks/SearchData";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useState, useEffect } from "react";
import MovieList from "../../Components/MovieList/MovieList";
import { useSelector } from "react-redux"; //isLoggedIn, setIsLoggedIn

export default function MovieSearch(pages) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const storedUsername = localStorage.getItem("username");

  const [keyword, setKeyword] = useState("");
  const [searchData, isLoading] = useSearchData(keyword);

  console.log("searchData: ", searchData);

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
  };

  return (
    <div>
      <S.Banner>
        {isLoggedIn ? (
          <h1>👋🏻 {storedUsername}님 환영합니다 👋🏻</h1>
        ) : (
          <h1>🧸 환영합니다 🧸</h1>
        )}
      </S.Banner>
      <S.Search>
        <p>
          <div className="search-box">
            <label>🎥 Find Your Movies!</label>
          </div>
          <input
            value={keyword}
            onChange={(e) => handleKeywordChange(e.target.value)}
          />
        </p>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <MovieList films={searchData} />
          </div>
        )}
      </S.Search>
    </div>
  );
}
