import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/loginUser";

export const initialState = {
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default userSlice.reducer;