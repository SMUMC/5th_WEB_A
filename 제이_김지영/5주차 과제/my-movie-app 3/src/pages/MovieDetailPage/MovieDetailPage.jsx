import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchData } from '../../Hooks/FetchData';
import { Container } from './MovieDetailPage.styled';

function renderStars(average) {
  const numberOfStars = Math.floor(average); // average의 소수점 아래를 버림
  const stars = [];

  for (let i = 0; i < 11; i++) {
    if (i < numberOfStars) {
      stars.push(<span key={i}>⭐️</span>);
    } /* else {
      stars.push(<span key={i}>☆</span>);
    } */
  }

  return (
    <div>
      평점 {average}/10 {stars}
    </div>
  );
}

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  // HOOK으로 만들어서 추리기
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
        `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error('error:' + err));
  }, []);

  console.log(movie);

  return (
    <main>
      <Container>
        <div>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} 이미지`} />
        </div>
        <div>
          <h1>{movie.title}</h1><br/>
          <h3>{renderStars(movie.vote_average)}</h3><br/>
          <h3>줄거리</h3><br/>
          <div>{movie.overview ? movie.overview : "TMDB에서 제공해주는 API에서 상세 줄거리 정보가 없습니다."}</div>
        </div>
      </Container>
    </main>
  );
}
