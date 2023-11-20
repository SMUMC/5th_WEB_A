import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Redux/loginSlice";

const store = configureStore({
  reducer: { login: loginReducer },
});

export default store;
