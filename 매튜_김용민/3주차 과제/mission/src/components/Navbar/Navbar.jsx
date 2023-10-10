import { useState } from 'react';
import * as S from './Navbar.style';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <S.NavbarContainer>
      <S.Logo to='/'>MFlix</S.Logo>

      <S.MainNav>
        <S.LoginButton onClick={handleLogin}>
          <h1>{isLogin ? '로그아웃' : '로그인'}</h1>
        </S.LoginButton>
        <S.NavLi>
          <S.NavLink to='/popular'>Popular</S.NavLink>
        </S.NavLi>
        <S.NavLi>
          <S.NavLink to='/nowplaying'>Now Playing</S.NavLink>
        </S.NavLi>
        <S.NavLi>
          <S.NavLink to='/toprated'>Top Rated</S.NavLink>
        </S.NavLi>
        <S.NavLi>
          <S.NavLink to='/upcoming'>Upcoming</S.NavLink>
        </S.NavLi>
      </S.MainNav>
    </S.NavbarContainer>
  );
};

export default Navbar;
