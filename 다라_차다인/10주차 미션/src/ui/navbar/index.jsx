import { Link } from "react-router-dom";
import * as S from "./Navbar.styled";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const isLogin = useSelector((state) => state.user.isLogin);
    return (
        <S.Container>
            <Link to="/">
                <S.Title>D Talk</S.Title>
            </Link>
            {isLogin &&
                <Link to="/myProfile">
                    <S.TextButton type="text">프로필</S.TextButton>
                </Link>}
            <Link to="/signup">
                <S.TextButton type="text">회원가입</S.TextButton>
            </Link>
            <S.SearchInput />
            <Link to="https://github.com/daindaind">
                <p>{"ଘ(˵╹-╹)━☆"} made by dain</p>
            </Link>
        </S.Container>
    );
}