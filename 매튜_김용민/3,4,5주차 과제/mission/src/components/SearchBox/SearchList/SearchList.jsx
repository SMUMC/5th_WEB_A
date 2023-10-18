import { useEffect, useState } from 'react';
import { fetchKeywordMovie } from '../../../utils/movie';
import * as S from './SearchList.style';
import { useNavigate } from 'react-router-dom';

const SearchList = ({ searchMovie }) => {
  const [findMovies, setFindMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchKeywordMovie(searchMovie);
        setFindMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchMovie]);

  return (
    <S.Container>
      {findMovies &&
        findMovies.map((film, index) => {
          const { id, title, vote_average, poster_path } = film;
          return (
            <>
              <S.Image
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={title}
              />
              <S.Description>
                <h3>{title}</h3>
                <p>{vote_average.toFixed(2)}</p>
              </S.Description>
            </>
          );
        })}
    </S.Container>
  );
};

export default SearchList;
