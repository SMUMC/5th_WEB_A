import * as S from "./SelectedMusic.styled";
import { QuantitySelector } from "../../components/quantitySelector";
import { useSelector } from "react-redux";

export const SelectedMusic = ({ id }) => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const music = cartItems.find((item) => item.id === id);
    const { img, title, singer, price, amount } = music;

    return (
        <S.Container>
            <S.Cover src={img}/>
            <S.ContentsContainer>
                <h5>{title} | {singer}</h5>
                <p>₩{price}</p>
            </S.ContentsContainer>
            <S.CountContainer>
                <QuantitySelector 
                    id={id}
                    amount={amount}
                />
            </S.CountContainer>
        </S.Container>
    );
}