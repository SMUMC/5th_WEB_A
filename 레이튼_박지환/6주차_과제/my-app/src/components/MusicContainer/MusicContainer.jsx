import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../redux/shoppingSlice";
import { ChevronDown, ChevronUp } from "../../constants/Icons";
import * as S from "../MusicContainer/MusicContainer.styled";

export default function MusicContainer({
  id,
  img,
  price,
  singer,
  title,
  amount,
}) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decrease(id));
    dispatch(removeItem(id));
  };

  // const value = useSelector((state) => state.shopping.value); value는 전역으로 동시에 적용된다(독립성이 없다)

  return (
    <S.MusicContainer>
      <div className="wrapper">
        <img src={img} alt={title} />
        <h1>
          {title} | {singer}
          <br />
          {price}$
        </h1>
        <div className="buttonWrapper">
          <button onClick={() => dispatch(increase(id))}>
            <ChevronUp />
          </button>
          <span>{amount}</span>
          <button onClick={handleDecrease}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </S.MusicContainer>
  );
}
