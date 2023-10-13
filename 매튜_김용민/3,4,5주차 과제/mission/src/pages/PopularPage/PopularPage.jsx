import { MoviesList } from '../../components';
import { customFetch } from '../../utils/movie';
import * as S from './PopularPage.style';

const popularKoreanMovie = {
  type: 'popular',
  language: 'ko-KR',
  page: '1',
};

export const loader = async () => {
  const datum = await customFetch(popularKoreanMovie);

  return datum;
};

const PopularPage = () => {
  return (
    <S.Wrapper>
      <MoviesList />
    </S.Wrapper>
  );
};

export default PopularPage;
