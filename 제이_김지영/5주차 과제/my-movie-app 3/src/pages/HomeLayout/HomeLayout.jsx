import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import * as S from './HomeLayout.styled';

export default function HomeLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <Footer />
    </S.Container>
  );
}
