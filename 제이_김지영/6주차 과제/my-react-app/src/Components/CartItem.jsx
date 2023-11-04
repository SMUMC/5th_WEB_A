//rfac
//rfc
import * as S from "./CartItem.style";

import { ChevronUp, ChevronDown} from "../constants/icons";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";


const CartItem = ({ music }) => {
  // const amount = useSelector((state) => state.cart.amount); //이렇게 불러오면 전체수량의 amount이다. hard하다.
  // console.log(props.music)
  const dispatch = useDispatch();

  const { id, title, singer, img, price, amount } = music;
  //const {singer, title, price, id, img} = music;

  return (
    <>
      <S.Container>
        {/*<div>{img}</div> //아님*/}
        <S.Image src={img} alt={`${title} 이미지`} />
        <S.Info>
          <h3>{title}</h3>
          <div>{singer}</div>
          <div>₩ {price}</div>
        </S.Info>
        <div>
          <button  onClick={() => dispatch(increase(id))}>
            <ChevronUp/>
          </button>

          <div>{amount}</div>
          {/* amount > 1 decrease*(id) */}
          {/* amount < 0 removeItem(id) */}
          <button
            onClick={() => {
              if (amount > 1) {
                dispatch(decrease(id));
              } else {
                dispatch(removeItem(id));
              }
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </S.Container>
    </>
  );
};

export default CartItem;
