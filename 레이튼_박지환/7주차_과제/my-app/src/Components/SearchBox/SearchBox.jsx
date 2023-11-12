import * as S from "../SearchBox/SearchBox.styled";
import { useState } from "react";
import { UseDebouncing } from "../../Hooks/UseDebouncing";
import { useMovieSearch } from "../../Hooks/searchData";
export default function SearchBox() {
  const [isKeyword, setIsKeyword] = useState("");
  const useDebouncing = UseDebouncing(isKeyword, 2000);
  const searchData = useMovieSearch(useDebouncing);

  const handleInput = (event) => {
    setIsKeyword(event.target.value);
  };

  const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";
  return (
    <S.Container>
      <h1>🎥영화를 찾아보세요!🎥</h1>
      <input
        type="text"
        placeholder="찾고 싶은 영화를 검색하세요!"
        onChange={handleInput}
        value={isKeyword}
      />
      <div>
        {searchData.map((result) => {
          const { title, poster_path, id, vote_average } = result;
          return (
            <div key={id} className="wrap">
              {poster_path === null ? (
                <span className="baseImage"></span>
              ) : (
                <img src={IMAGE_URL + poster_path} alt={title} />
              )}
              <span>
                <h2>{title}</h2>
                <h2>
                  {vote_average === 0 ? (
                    <p>점수 음슴</p>
                  ) : (
                    Math.round(vote_average)
                  )}
                </h2>
              </span>
            </div>
          );
        })}
      </div>
    </S.Container>
  );
}
