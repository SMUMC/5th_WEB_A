import Movie from './Movie/Movie';
import * as S from './MovieList.styled';

function MovieList({ films }) {
  console.log(films);
  
  if (!films) {
    return <div>No movies to display.</div>;
  }

  return (
    <S.Container>
      {films.map((film) => (
        <Movie key={film.id} film={film} />
      ))}
    </S.Container>
  );
}

export default MovieList;
