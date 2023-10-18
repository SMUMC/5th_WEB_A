import { SearchBox } from '../../components';
import Banner from '../../components/Banner/Banner';
import * as S from './MainPage.style';

const MainPage = () => {
  return (
    <S.Wrapper>
      <Banner />
      <SearchBox />
    </S.Wrapper>
  );
};

export default MainPage;
