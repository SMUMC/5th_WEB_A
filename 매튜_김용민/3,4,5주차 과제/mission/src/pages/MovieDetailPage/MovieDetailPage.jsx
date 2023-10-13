import { useLocation } from 'react-router-dom';
import * as S from './MovieDetailPage.style';

const MovieDetailPage = () => {
  const location = useLocation();

  const { poster_path, title, vote_average, overview, original_title } =
    location.state;

  return (
    <S.Container>
      <S.MovieWrapper>
        <S.MovieImage
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
        <S.MovieDescription>
          <h1>{title}</h1>
          <h3>평점 {'⭐️'.repeat(Math.floor(vote_average))}</h3>
          <h3>줄거리</h3>
          <p>
            {overview
              ? overview
              : 'TMDB 에서 제공해주는 API에 상세 줄거리 정보가 없습니다.'}
          </p>
        </S.MovieDescription>
      </S.MovieWrapper>
    </S.Container>
  );
};

export default MovieDetailPage;
