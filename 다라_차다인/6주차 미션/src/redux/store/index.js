import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import modalReducer from "../slices/modalSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});