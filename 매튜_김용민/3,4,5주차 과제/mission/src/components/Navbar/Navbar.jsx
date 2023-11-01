import { useState } from 'react';
import * as S from './Navbar.style';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <S.NavbarContainer>
      <S.Logo to='/'>MFlix</S.Logo>

      <S.MainNav>
        <S.NavLi>
          <S.NavMenu to='/signup'>회원가입</S.NavMenu>
        </S.NavLi>
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
