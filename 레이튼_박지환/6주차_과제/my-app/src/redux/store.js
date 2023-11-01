import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./shoppingSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});
// 전역 상태관리를 위한 store 생성
