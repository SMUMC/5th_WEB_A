import * as S from "./MovieInfo.style";
import { useState, useEffect } from "react";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MovieInfo({
  vote_average,
  poster_path,
  title,
  overview,
}) {
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    if (overview === "") {
      setIsCheck(true);
    }
  }, [overview]);
  return (
    <S.InfoBackground>
      <S.InfoContainer>
        <S.MovieInfoImg src={IMAGE_URL + poster_path} alt={title} />
        <S.InfoWrapper>
          <S.MovieTitle>{title}</S.MovieTitle>
          <S.MovieStar>
            <S.InfoTitle>평점</S.InfoTitle>
            {"⭐️".repeat(Math.floor(vote_average))}
            {/* repeat이용해서 반복하기 */}
          </S.MovieStar>
          <S.InfoTitle>줄거리</S.InfoTitle>
          {isCheck ? (
            <S.MovieInfo>Tmdb에서 제공하는 정보가 없습니다.</S.MovieInfo>
          ) : (
            <S.MovieInfo>{overview}</S.MovieInfo>
          )}
        </S.InfoWrapper>
      </S.InfoContainer>
    </S.InfoBackground>
  );
}
