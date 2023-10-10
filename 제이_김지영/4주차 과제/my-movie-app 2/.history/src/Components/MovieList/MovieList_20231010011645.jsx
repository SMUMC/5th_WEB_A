import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

const MovieList = ({ films }) => {
  console.log(films);
  return (
    <S.Container>
      {films.map((film) => (
        <Movie key={film.id} film={film} />
      ))}
    </S.Container>
  );
};

export default MovieList;
