// src/redux/store.js
import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
