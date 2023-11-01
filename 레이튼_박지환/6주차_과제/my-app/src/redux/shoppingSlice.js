import { createSlice } from "@reduxjs/toolkit";
import items from "../constants/cartItems";
import cartItems from "../constants/cartItems";

// 리듀서와 액션 생성함수기능을 제공해주는 객체 slice 생성

const initialState = {
  cartItems: items, // 반드시 선언해줘야한다.(중요)
  sum: 7,
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    increase: (state, action) => {
      const itemId = action.payload; // MuvieCon에서 들어온 Id값
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      // find 함수로 12개의 음악 중에 하나씩 순회한다.
      cartItem.amount += 1;
      state.sum += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload; // MuvieCon에서 들어온 Id값
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount -= 1;
      state.sum -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload; // MuvieCon에서 들어온 Id값
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      if (cartItem.amount === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        // 들어온 id와 다른 값만 남긴다. 즉 0이된 음반을 빼고 cartItems를 재정의한다.
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.sum = 0;
    },
  },
});

export const { increase, decrease, removeItem, clearCart } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
