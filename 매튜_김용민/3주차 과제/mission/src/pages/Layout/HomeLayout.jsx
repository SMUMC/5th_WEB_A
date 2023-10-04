import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import * as S from './HomeLayout.style';

const HomeLayout = () => {
  return (
    <S.Container>
      <Navbar />
      <Outlet />
      <Footer />
    </S.Container>
  );
};

export default HomeLayout;
