import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/Navbar/Navbar.style";
import Login from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/Navbar/Login";
function Navbar() {
  return (
    <S.NavContainer>
      <S.StyledLink to="/">Pflix</S.StyledLink>
      <div>
        <Login />
        <S.StyledLink to="/popular">Popular</S.StyledLink>
        <S.StyledLink to="/now_playing">Now Playing</S.StyledLink>
        <S.StyledLink to="/top_rated">Top Rated</S.StyledLink>
        <S.StyledLink to="/upcoming">Upcoming</S.StyledLink>
      </div>
    </S.NavContainer>
  );
}

export default Navbar;
