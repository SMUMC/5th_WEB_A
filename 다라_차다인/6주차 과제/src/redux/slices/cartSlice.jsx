import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increase: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount += 1;
    },
    decrease: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount -= 1;
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    }
  },
});

export const { increase, decrease, clearCart, calculateTotals, removeItem } = cartSlice.actions;
export default cartSlice.reducer;