import { createSlice } from "@reduxjs/toolkit";
import { loginActions } from "../actions/loginActions";

export const initialState = {
    token: "",
    loading: false,
    userId: "",
    isLogin: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        logout(state) {
            Object.assign(state, initialState);   //로그인 정보 전체 초기화
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginActions.fulfilled, (state, { payload }) => {
                // console.log(payload);
                const token = payload.data.token;
                const userId = payload.data.username;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("userId", userId);
                state.token = token;
                state.userId = userId;
                state.loading = false;
                state.isLogin = true;
                alert("로그인 되었습니다!");
            })
            .addCase(loginActions.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });
    }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;