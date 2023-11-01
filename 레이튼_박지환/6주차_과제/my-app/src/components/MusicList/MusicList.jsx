import * as S from "./MusicList.style";
import MusicContainer from "../MusicContainer/MusicContainer";
import { useSelector } from "react-redux";

export default function MusicList() {
  const items = useSelector((state) => state.shopping.cartItems);
  return (
    <S.MusicListStyle>
      {items.map((item) => {
        const { id, img, price, singer, title, amount } = item;
        return (
          <MusicContainer
            id={id}
            key={id}
            img={img}
            price={price}
            singer={singer}
            title={title}
            amount={amount}
          />
        );
      })}
    </S.MusicListStyle>
  );
}
