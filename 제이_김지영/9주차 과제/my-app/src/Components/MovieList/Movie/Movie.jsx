import { useState } from "react";
import * as S from "./Movie.styled";
import { useNavigate } from "react-router-dom";

function Movie(props) {
  const { id, poster_path, title, vote_average, overview, original_title } =
    props.film;
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handlePageMove = () => {
    // 1. 클릭
    //navigate(`/movie/${title}`;
    navigate(`/movie/${id}`, {
      state: {
        id,
        poster_path,
        title,
        vote_average,
        overview,
        original_title,
      },
    });
    // 2. 페이지 이동
  };

  return (
    <S.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHover(false)}
      onClick={handlePageMove}
    >
      <S.Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${title} 이미지`}
      />
      <S.MovieDescription>
        <p>{title}</p>
        <h3>{Math.floor(vote_average)}</h3>
      </S.MovieDescription>
      {isHover && (
        <S.HoverDescription>
          <h3>{title}</h3>
          <p>{overview ? overview : "영화 상세 정보가 없습니다."}</p>
        </S.HoverDescription>
      )}
    </S.Container>
  );
}

export default Movie;
