import React from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.Container>
      <Link to='/'></Link>
    </S.Container>
  );
}

export default Header;
