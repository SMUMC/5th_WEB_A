import * as S from "./Modal.styled";
import { Button } from "../../components/button/index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { closeModal } from "../../redux/slices/modalSlice";

export const Modal = () => {
    const modalContent = useSelector((state) => state.modal.modalContent);
    const dispatch = useDispatch();
    
    const resetCart = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    };

    const modalOff = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <S.Background />
            <S.ModalContainer>
                <p>{modalContent}</p>
                <S.ButttonContainer>
                    <Button onClick={resetCart} title={"예"}/>
                    <Button onClick={modalOff} title={"아니오"}/>                
                </S.ButttonContainer>
            </S.ModalContainer>
        </>
    );
};