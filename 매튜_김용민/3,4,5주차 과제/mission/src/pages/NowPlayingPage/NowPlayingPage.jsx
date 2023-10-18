import { MoviesList } from '../../components';
import { fetchGenreMovies } from '../../utils/movie';
import * as S from './NowPlayingPage.style';

const nowPlayingKoreanMovie = {
  type: 'now_playing',
  language: 'ko-KR',
  page: '1',
};

export const loader = async () => {
  const datum = await fetchGenreMovies(nowPlayingKoreanMovie);

  return datum;
};

const NowPlayingPage = () => {
  return (
    <S.Wrapper>
      <MoviesList />
    </S.Wrapper>
  );
};

export default NowPlayingPage;
