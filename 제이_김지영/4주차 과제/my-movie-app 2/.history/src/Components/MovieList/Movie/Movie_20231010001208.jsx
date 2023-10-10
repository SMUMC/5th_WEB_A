import { useState } from 'react';
import * as S from './Movie.styled';

function Movie(props) {
  const { poster_path, title, vote_average, overview } = props.film;
  console.log(props.film);
  const [isHover, setIsHover] = useState(true);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  return (
    <S.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={`${title} 이미지`}
      />
      <S.MovieDescription>
        <p>{title}</p>
        <h3>{vote_average}</h3>
      </S.MovieDescription>
      {isHover && (
        <S.HoverDescription>
          <h3>{title}</h3>
          <p>{overview ? overview : '영화 상세 정보가 없습니다.'}</p>
        </S.HoverDescription>
      )}
    </S.Container>
  );
}

export default Movie;
