import * as S from "./Navbar.style";
import Login from "./Login";
function Navbar() {
  return (
    <S.NavContainer>
      <S.StyledLink to="/">Pflix</S.StyledLink>
      <S.MenuContainer>
        <Login />
        <S.StyledLink to="/popular">Popular</S.StyledLink>
        <S.StyledLink to="/now_playing">Now Playing</S.StyledLink>
        <S.StyledLink to="/top_rated">Top Rated</S.StyledLink>
        <S.StyledLink to="/upcoming">Upcoming</S.StyledLink>
      </S.MenuContainer>
    </S.NavContainer>
  );
}

export default Navbar;
