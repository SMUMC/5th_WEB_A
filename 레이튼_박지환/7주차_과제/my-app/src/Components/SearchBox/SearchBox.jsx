import * as S from "../SearchBox/SearchBox.styled";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const [isKeyword, setIsKeyword] = useState("");
  const [isData, setIsData] = useState([]);

  function searchMovie() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    };
    const query = encodeURIComponent(isKeyword);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=ko-KR&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => setIsData(data.results))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    searchMovie();
  }, [isKeyword]);

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
        {isData.map((result) => {
          const { title, poster_path, id, vote_average } = result;
          return (
            <div key={id} className="wrap">
              <img src={IMAGE_URL + poster_path} alt={title} />
              <span>
                <h2>{title}</h2>
                <h2>{Math.round(vote_average)}</h2>
              </span>
            </div>
          );
        })}
      </div>
    </S.Container>
  );
}
