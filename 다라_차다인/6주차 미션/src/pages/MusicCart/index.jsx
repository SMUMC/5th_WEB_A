import { SelectedMusic } from "../../uis/selectedMusic";
import * as S from "./Music.styled";
import { Button } from "../../components/button/index";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import ModalPortal from "../../modalPotal";
import { Modal } from "../../uis/modal";
import { calculateTotals } from "../../redux/slices/cartSlice";
import { useEffect } from "react";

export const MusicCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = useSelector((state) => state.cart.total);
    const isOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

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
            {total > 0 && <Button onClick={() => dispatch(openModal())} title={"장바구니 초기화"} />}
            {isOpen && (
                <ModalPortal>
                    <Modal>
                        <p>정말 모든 상품을 삭제할까요?</p>
                    </Modal>
                </ModalPortal>
            )}
        </S.Container>
    );
};