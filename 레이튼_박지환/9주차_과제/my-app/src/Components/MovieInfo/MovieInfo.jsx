import * as S from "../MovieInfo/MovieInfo.style";

const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MovieInfo({
  vote_average,
  poster_path,
  title,
  overview,
}) {
  console.log(vote_average);
  return (
    <S.InfoBackground>
      <div style={{ width: "100%" }}>
        {poster_path === null ? (
          <S.BasicImg>이미지가 없어요!</S.BasicImg>
        ) : (
          <img src={IMAGE_URL + poster_path} alt={title} />
        )}
        <div className="InfoWrapper">
          <h1>{title}</h1>
          <h2>평점</h2>
          {vote_average === 0 ? (
            <p>평가가 되지 않음</p>
          ) : (
            <span>{"⭐️".repeat(Math.floor(vote_average))}</span>
          )}
          {/* repeat이용해서 반복하기 */}

          <h2>줄거리</h2>
          {overview.trim().length === 0 ? (
            // useEffect나 useState를 남발하지 말자
            <h3>Tmdb에서 제공하는 정보가 없습니다.</h3>
          ) : (
            <h3>{overview}</h3>
          )}
        </div>
      </div>
    </S.InfoBackground>
  );
}
