import * as S from './Navbar.style';

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo to='/'>MFlix</S.Logo>
      <S.MainNav>
        <S.NavLi>
          <S.NavLink to='/'>Popular</S.NavLink>
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
