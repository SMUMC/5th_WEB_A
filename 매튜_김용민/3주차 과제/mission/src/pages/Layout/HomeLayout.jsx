import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Loading, Navbar } from '../../components/index';

import * as S from './HomeLayout.style';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <S.Container>{isPageLoading ? <Loading /> : <Outlet />}</S.Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
