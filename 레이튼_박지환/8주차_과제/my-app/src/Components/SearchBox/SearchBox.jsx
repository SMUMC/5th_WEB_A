import * as S from "../SearchBox/SearchBox.styled";
import { useState } from "react";
import { UseDebouncing } from "../../Hooks/UseDebouncing";
import { SearchData } from "../../Hooks/SearchData";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [isKeyword, setIsKeyword] = useState("");
  const useDebouncing = UseDebouncing(isKeyword, 2000);
  const { isData, isLoading } = SearchData(useDebouncing);

  const handleInput = (event) => {
    setIsKeyword(event.target.value);
  };

  const navigate = useNavigate();

  const onClickMovie = (film) => {
    navigate(`/movie/${film.id}`, {
      // 여기서 /movie 로 줘야 절대 경로로 간다.
      state: { film },
    });
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
        {isLoading ? (
          <div className="loadingMessage">데이터를 받아오는 중입니다.</div>
        ) : (
          isData.map((film) => {
            const { title, poster_path, id, vote_average } = film;
            return (
              <div key={id} className="wrap">
                {poster_path === null ? (
                  <span className="baseImage"></span>
                ) : (
                  <img
                    src={IMAGE_URL + poster_path}
                    alt={title}
                    onClick={() => onClickMovie(film)} // arrow function 꼴로 줘야 클릭시 이동
                  />
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
          })
        )}
      </div>
    </S.Container>
  );
}
