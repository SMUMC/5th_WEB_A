import { useState } from "react"; // import react는 hook쓸 때만 쓰면 된다.
import { useNavigate } from "react-router-dom";
import Movie from "../Movie/Movie";
import MovieDescription from "../MovieDescription/MovieDescription";
import * as S from "../MovieContainer/MovieContainer.style";

function MovieContainer({ film }) {
  // film을 각각 받아온다.

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { title, poster_path, vote_average } = film;

  const navigate = useNavigate();

  const onClickMovie = () => {
    navigate(`/movie/${film.id}`, {
      // 여기서 /movie 로 줘야 절대 경로로 간다.
      state: { film },
    });
  };

  return (
    <S.MovieContainerStyle
      onClick={onClickMovie}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Movie
        title={title}
        posterPath={poster_path}
        voteAverage={vote_average}
      />
      {isHovering && <MovieDescription film={film} />}
    </S.MovieContainerStyle>
  );
}

export default MovieContainer; // 컴포넌트 내보내기
