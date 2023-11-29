import * as S from "../Navbar/Navbar.style";
import { logout } from "../../Redux/signUpSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.signUp.isLogin);

  return (
    <S.NavContainer>
      <S.StyledLink to="/">Pflix</S.StyledLink>
      <div>
        {token && isLogin ? (
          <S.StyledLink onClick={() => dispatch(logout())}>
            로그아웃
          </S.StyledLink>
        ) : (
          <S.StyledLink to="/login">로그인</S.StyledLink>
        )}
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
