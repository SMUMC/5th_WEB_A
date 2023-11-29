import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  message: "",
  loading: false,
  isLogin: false,
};
// action creator에 필수적으로 있어야하는 타입이 login
export const loginApi = createAsyncThunk("login", async (body) => {
  const res = await axios.post("http://localhost:3000/user/login", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await res.data);
  return await res.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.loading = true;
        state.isLogin = false;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        // 로그인 완료시에 할일들
        state.message = action.payload.message;
        state.isLogin = action.payload.isSuccess;
        state.token = action.payload.result.AccessToken;
        localStorage.setItem("token", action.payload.result.AccessToken);

        state.loading = false;
        console.log(action.payload);
        // console.log(action.payload.result.AccessToken);
      })
      .addCase(loginApi.rejected, (state, action) => {
        // 로그인 안됐을 떄 할일
        state.loading = false;
        state.message = action.payload.message;
        state.isLogin = action.payload.isSuccess;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
