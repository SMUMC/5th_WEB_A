import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/loginUser";

export const initialState = {
    token: "",
    loading: false,
    userId: {},
    isLogin: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logout(state) {
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log(payload);
                const token = payload.data.result.AccessToken;
                const userId = payload.data.result.userId;
                localStorage.setItem("userId", userId);
                localStorage.setItem("AccessToken", token);
                state.token = token;
                state.userId = userId;
                state.loading = false;
                state.isLogin = true;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });
    },
});

export const { logout } = userSlice.actions
export default userSlice.reducer;