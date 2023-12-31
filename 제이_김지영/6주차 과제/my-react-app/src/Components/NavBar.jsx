import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";
import * as S from "./NavBar.style";

const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <S.Wrapper>
      <h1>SMU PlayList</h1>
      <S.Icon>
        <CartIcon /> {amount}
      </S.Icon>
    </S.Wrapper>
  );
};

export default NavBar;
