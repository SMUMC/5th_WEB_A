import { SelectedMusic } from "../../uis/selectedMusic";
import * as S from "./Music.styled";
import { Button } from "../../components/button/index";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../../redux/slices/cartSlice";
import { useEffect } from "react";
import { Modal } from "../../uis/modal";
import { openModal } from "../../redux/slices/modalSlice";

export const MusicCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = useSelector((state) => state.cart.total);
    const showModal = useSelector((state) => state.modal.showModal);
    const dispatch = useDispatch();

    const OpenModal = () => {
        dispatch(openModal("정말 모든 상품을 삭제할까요?"));
    };

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    return (
        <S.Container>
            <S.Title>
                당신이 선택한 음반
            </S.Title>
            <S.MusicContainer>
                {cartItems.map((item) =>
                    <SelectedMusic key={item.id} id={item.id} /> 
                )}
            </S.MusicContainer>
            <S.HorizontalLine>
                <p>총 가격</p>
                <p>₩ {total}</p>
            </S.HorizontalLine>
            {total > 0 && <Button onClick={OpenModal} title={"장바구니 초기화"}/>}
            {showModal && <Modal />}
        </S.Container>
    );
};