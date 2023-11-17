import * as S from "../Navbar/Navbar.style";
// import Login from "../Navbar/Login";
function Navbar() {
  return (
    <S.NavContainer>
      <S.StyledLink to="/">Pflix</S.StyledLink>
      <div>
        {/* <Login /> */}
        <S.StyledLink to="/signup">회원가입</S.StyledLink>
        <S.StyledLink to="/popular">Popular</S.StyledLink>
        <S.StyledLink to="/now_playing">Now Playing</S.StyledLink>
        <S.StyledLink to="/top_rated">Top Rated</S.StyledLink>
        <S.StyledLink to="/upcoming">Upcoming</S.StyledLink>
      </div>
    </S.NavContainer>
  );
}

export default Navbar;
