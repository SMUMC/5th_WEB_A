import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FetchData } from "../../Hooks/FetchData";
import { Container } from "./MovieDetailPage.styled";

export default function MovieDetail() {
  // const { id } = useParams();
  // const [movie, setMovie] = useState([]);
  const location = useLocation();
  const { poster_path, title, vote_average, overview } = location.state; //구조분해할당

  // // HOOK으로 만들어서 추리기
  // useEffect(() => {
  //   const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
  //     },
  //   };

  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => setMovie(json))
  //     .catch((err) => console.error('error:' + err));
  // }, []);

  // console.log(movie);

  return (
    <main>
      <Container>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={`${title} 이미지`}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <br />
          <h3>{"⭐️".repeat(Math.floor(vote_average), 1)}</h3>
          <br />
          <h3>줄거리</h3>
          <br />
          <div>
            {overview
              ? overview
              : "TMDB에서 제공해주는 API에서 상세 줄거리 정보가 없습니다."}
          </div>
        </div>
      </Container>
    </main>
  );
}
