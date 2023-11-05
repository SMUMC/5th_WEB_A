import React from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <S.Container>
        <Link to='/'>
          <S.Logo>
            <h1>Watcha</h1>
          </S.Logo>
        </Link>
        <S.Category>
          <Link to='/popular'>
            <h1>Popular</h1>
          </Link>
          <Link to='/nowplaying'>
            <h1>Now Playing</h1>
          </Link>
          <Link to='/toprated'>
            <h1>Top Rated</h1>
          </Link>
          <Link to='/upcoming'>
            <h1>Upcoming</h1>
          </Link>
        </S.Category>
      </S.Container>
     </div>
  );
}

export default Header;
