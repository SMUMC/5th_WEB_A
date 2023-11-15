import { useDispatch } from "react-redux";
import * as S from "./QuantitySelector.styled";
import { decrease, increase, removeItem } from "../../redux/slices/cartSlice";

export const QuantitySelector = ({ id, amount }) => {
    const dispatch = useDispatch();
    const CountIncrease = () => {
        dispatch(increase(id));
    }
    const CountDecrease = () => {
        if (amount <= 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decrease(id));
        }
    }

    return (
        <S.Container>
            <S.CountUp onClick={CountIncrease} />
            <p>{amount}</p>
            <S.CountDown onClick={CountDecrease} />
        </S.Container>
    );
};