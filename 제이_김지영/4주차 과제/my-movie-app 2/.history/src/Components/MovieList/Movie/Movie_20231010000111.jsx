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
    <>
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
      </S.Container>
      {isHover && (
        <S.HoverDescription>
          <p>{title}</p>
          <p>{overview}</p>
        </S.HoverDescription>
      )}
    </>
  );
}

export default Movie;
