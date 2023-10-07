import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Loading, Navbar } from '../../components/index';

import * as S from './HomeLayout.style';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <S.Container>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      <Footer />
    </S.Container>
  );
};

export default HomeLayout;
