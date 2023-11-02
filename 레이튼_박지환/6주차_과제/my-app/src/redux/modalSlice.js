import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModal = true;
    },
    hideModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
