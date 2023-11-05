import * as S from "./Banner.styled";
import { CartIcon } from "../../constants/Icons";
import { useSelector } from "react-redux";
// 같은 계층에 있어도 relative, absolute 줄 수 있다.
export default function Banner() {
  const sum = useSelector((state) => state.shopping.sum);
  return (
    <S.Banner>
      <h1>JI PLAYLIST</h1>
      <div>{sum}</div>
      <CartIcon />
    </S.Banner>
  );
}
