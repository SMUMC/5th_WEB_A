import * as S from "./Modal.styled";
import { Button } from "../../components/button/index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { closeModal } from "../../redux/slices/modalSlice";
import ModalPortal from "../../modalPotal";

export const Modal = ({ children }) => {
    const dispatch = useDispatch();

    const resetCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    };

    const modalOff = () => {
        dispatch(closeModal());
    };

    return (
        <ModalPortal>
            <S.Background onClick={modalOff} />
            <S.ModalContainer>
                {children}
                <S.ButttonContainer>
                    <Button onClick={resetCart} title={"예"} />
                    <Button onClick={modalOff} title={"아니오"} />
                </S.ButttonContainer>
            </S.ModalContainer>
        </ModalPortal>
    );
};