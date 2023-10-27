import { MoviesList } from '../../components';
import { fetchGenreMovies } from '../../utils/movie';
import * as S from './TopRatedPage.style';

const topRatedKoreanMovie = {
  type: 'top_rated',
  language: 'ko-KR',
  page: '1',
};

export const loader = async () => {
  const datum = await fetchGenreMovies(topRatedKoreanMovie);

  return datum;
};

const TopRatedPage = () => {
  return (
    <S.Wrapper>
      <MoviesList />
    </S.Wrapper>
  );
};

export default TopRatedPage;
