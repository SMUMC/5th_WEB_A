import { useState } from "react"; // import react는 hook쓸 때만 쓰면 된다.
import Movie from "../Movie/Movie";
import MovieDesc from "../MovieDesc/MovieDesc";
import { MovieContainerStyle } from "./MovieContainer.style";

function MovieContainer({ film }) {
  // film을 각각 받아온다.

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { title, poster_path, vote_average, overview } = film;

  return (
    <MovieContainerStyle
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Movie
        title={title}
        posterPath={poster_path}
        voteAverage={vote_average}
      />
      {isHovering && <MovieDesc title={title} description={overview} />}
    </MovieContainerStyle>
  );
}

export default MovieContainer; // 컴포넌트 내보내기
