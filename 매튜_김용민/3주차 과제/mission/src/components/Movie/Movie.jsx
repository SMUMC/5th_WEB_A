import { useState } from 'react';
import * as S from './Movie.style.js';

const Movie = (props) => {
  const { poster_path, title, vote_average, overview } = props.movieData;
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <S.Wrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <S.ImageContainer>
          <S.Image
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
          <S.Description>
            <p>{title}</p>
            <p>{vote_average}</p>
          </S.Description>
        </S.ImageContainer>
        {isHover && (
          <S.HoverDescription>
            <p>{title}</p>
            <p>{overview}</p>
          </S.HoverDescription>
        )}
      </S.Wrapper>
    </>
  );
};

export default Movie;
