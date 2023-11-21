import Movie from "./Movie/Movie";
import * as S from "./MovieList.styled";
//import Footer from "../Footer/Footer";

function MovieList({ films }) {
  console.log(films);

  if (!films) {
    return <div>No movies to display.</div>;
  }

  return (
    <div>
      <S.Container>
        {films.map((film) => (
          <Movie key={film.id} film={film} />
        ))}
      </S.Container>
      {/* <Footer /> */}
    </div>
  );
}

export default MovieList;
