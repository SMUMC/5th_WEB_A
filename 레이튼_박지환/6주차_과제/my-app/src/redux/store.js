import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shoppingSlice";
import modalSlice from "./modalSlice";
export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
    modal: modalSlice,
  },
});
// 전역 상태관리를 위한 store 생성
