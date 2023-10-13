import { MoviesList } from '../../components';
import { customFetch } from '../../utils/movie';

import * as S from './UpComingPage.style';

const upComingKoreanMovie = {
  type: 'upcoming',
  language: 'ko-KR',
  page: '2',
};

export const loader = async () => {
  const datum = await customFetch(upComingKoreanMovie);
  return datum;
};

const UpComingPage = () => {
  return (
    <S.Wrapper>
      <MoviesList />
    </S.Wrapper>
  );
};

export default UpComingPage;
