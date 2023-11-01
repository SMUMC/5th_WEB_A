import * as S from "./Footer.styled";
import { clearCart } from "../../redux/shoppingSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Footer() {
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    setIsShow(false);
  };
  return (
    isShow && (
      <S.Footer>
        <h1>총가격</h1>
        <button onClick={handleClearCart}>장바구니 초기화</button>
      </S.Footer>
    )
  );
}
