import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../contants/cartItems";

const initialState = {
  cartItems: cartItems,
  total: 276000,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        increase: (state, action) => {
          const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
          if (item) {
              item.amount += 1;
          }
        },
        decrease: (state, action) => {
          const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);

          if (item && item.amount > 0) {
              item.amount -= 1;
          }
        },
        removeItem: (state, action) => {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
          state.cartItems = [];
        },
        calculateTotals: (state) => {
          state.total = state.cartItems.reduce((total, item) => {
            return total + (item.amount * item.price);
          }, 0);
        }
    },
});

export const { increase, decrease, clearCart, calculateTotals, removeItem } = cartSlice.actions;
export default cartSlice.reducer;