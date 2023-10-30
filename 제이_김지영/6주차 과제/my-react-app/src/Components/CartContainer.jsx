import * as S from "./CartContainer.style";
// import cartItems from '../constants/cartItems';
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart); // 구조분해할당
  const dispatch = useDispatch();
  return (
    <>
      <S.Container>
        <h1>당신이 선택한 음반</h1>
        {cartItems.map((item) => {
          //cartItems에서 하나의 Object(단수)를 파라미터로 받아옴.
          //return <div>{item.title}</div>;
          return <CartItem id={item.id} music={item} />; //컴포넌트로 만드는 습관 들여야됨
          //받아온 파라미터를 내가 임의로 music이라고 이름붙인 변수에 넣어줌.
        })}
      </S.Container>
      <div>
        <h1>총 가격: {total}</h1>
        <button onClick={() => dispatch(clearCart())}>장바구니 초기화</button>
      </div>
    </>
  );
};

export default CartContainer;
