import * as S from "./MainPage.styled";
import { SearchData } from "../../Hooks/SearchData";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
//import MovieList from "../../Components/MovieList/MovieList";
/*
import * as S from "./MainPage.styled";

export default function Toprated() {
  return (
    <S.Container>
      <h1>Happy Movie Day ! </h1>

    </S.Container>
  );
}
*/

export default function MovieSearch(pages) {
  const [keyword, setKeyword] = useState("");
  const { searchData, isLoading } = SearchData(keyword);

  console.log("searchData: ", searchData);

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
  };

  return (
    <div>
      <S.Banner>
        <h1>🎄 Happy Movie Day ! 🎄</h1>
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
            {searchData && searchData.length > 0 ? (
              // searchData가 존재하고 길이가 1 이상인 경우에만 map 메서드 사용
              searchData.map((movie, id) => (
                <div key={id}>
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </S.Search>
    </div>
  );
}
