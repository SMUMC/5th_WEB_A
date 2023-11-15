import * as S from "./Navbar.styled";
import { CartIcon } from "../../components/cartIcon";

export const Navbar = () => {
    return (
        <S.Container>
            <S.ContentsContainer>
                <h1>D playlist</h1>
                <CartIcon />
            </S.ContentsContainer>
        </S.Container>
    );
}