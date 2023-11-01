import * as S from "./Banner.styled";
import { CartIcon } from "../../constants/Icons";
import { useSelector } from "react-redux";

export default function Banner() {
  const sum = useSelector((state) => state.shopping.sum);
  return (
    <S.Banner>
      <h1>JI PLAYLIST</h1>
      <div>{sum}</div>
      <CartIcon></CartIcon>
    </S.Banner>
  );
}
