import { MoviesList } from '../../components';
import { customFetch } from '../../utils/movie';
import * as S from './UpComingPage.style';

const url = '/upcoming?language=ko-KR&page=1';

export const loader = async () => {
  const response = await customFetch.get(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });

  return response.data;
};

const UpComingPage = () => {
  return (
    <S.Wrapper>
      <MoviesList />
    </S.Wrapper>
  );
};

export default UpComingPage;
