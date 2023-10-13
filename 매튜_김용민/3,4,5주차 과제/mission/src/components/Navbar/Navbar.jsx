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
          <S.NavMenu to='/popular'>Popular</S.NavMenu>
        </S.NavLi>
        <S.NavLi>
          <S.NavMenu to='/nowplaying'>Now Playing</S.NavMenu>
        </S.NavLi>
        <S.NavLi>
          <S.NavMenu to='/toprated'>Top Rated</S.NavMenu>
        </S.NavLi>
        <S.NavLi>
          <S.NavMenu to='/upcoming'>Upcoming</S.NavMenu>
        </S.NavLi>
      </S.MainNav>
    </S.NavbarContainer>
  );
};

export default Navbar;
