import * as S from "./CartIcon.styled";
import { useSelector } from "react-redux";

export const CartIcon = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = cartItems.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    return (
        <S.Container>
            <S.Cart />
            <S.Count >
                <p>{total}</p>
            </S.Count>
        </S.Container>
    );
}