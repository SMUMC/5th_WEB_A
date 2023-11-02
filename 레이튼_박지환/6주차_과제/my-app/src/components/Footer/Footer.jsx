import * as S from "./Footer.styled";
import { clearCart } from "../../redux/shoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { calculateTotals } from "../../redux/shoppingSlice";
// import cartItems from "../../constants/cartItems";

export default function Footer() {
  const [isShow, setIsShow] = useState(true);
  const total = useSelector((state) => state.shopping.total);
  const cartItems = useSelector((state) => state.shopping.cartItems);
  // useEffect의 dependency array 설정을 위해서 불러옴

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    setIsShow(false);
  };
  return (
    isShow && (
      <S.Footer>
        <div>
          <h1>총가격 :</h1>
          <p>{total}$</p>
        </div>
        <button onClick={handleClearCart}>장바구니 초기화</button>
      </S.Footer>
    )
  );
}
