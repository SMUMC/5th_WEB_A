import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShow(true);
    },
    hideModal: (state) => {
      state.isShow(false);
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
