import React from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.Container>
      <Link to='/'>
        <h1>Logo</h1>
      </Link>
      <Link to='/nowplaying'>
        <h1>now playing</h1>
      </Link>
      <Link to='/nowplaying'>
        <h1>now playing</h1>
      </Link>
      <Link to='/nowplaying'>
        <h1>now playing</h1>
      </Link>
      <Link to='/nowplaying'>
        <h1>now playing</h1>
      </Link>
    </S.Container>
  );
}

export default Header;
