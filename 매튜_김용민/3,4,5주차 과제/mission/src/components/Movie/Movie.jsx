import { useState } from 'react';
import * as S from './Movie.style.js';
import { Link, useNavigate } from 'react-router-dom';

const Movie = (props) => {
  const navigate = useNavigate();
  const { poster_path, title, vote_average, overview, original_title } =
    props.movieData;
  const [isHover, setIsHover] = useState(false);
  const handleMoveDetailPage = () => {
    navigate(`/movie/${original_title}`, {
      state: {
        poster_path,
        title,
        vote_average,
        overview,
        original_title,
      },
    });
  };
  return (
    <>
      <S.Wrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleMoveDetailPage}
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
