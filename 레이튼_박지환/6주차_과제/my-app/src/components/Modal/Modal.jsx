import * as S from "../Modal/Modal.styled";
import { hideModal } from "../../redux/modalSlice";
import { clearCart } from "../../redux/shoppingSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  const isModal = useSelector((state) => state.modal.isModal);
  const dispatch = useDispatch();
  return (
    <S.Modal style={{ display: isModal ? "block" : "none" }}>
      <h1>정말 모든 상품을 삭제할까요?</h1>
      <button onClick={() => dispatch(clearCart())}>예</button>
      <button onClick={() => dispatch(hideModal())}>아니오</button>
    </S.Modal>
  );
}
