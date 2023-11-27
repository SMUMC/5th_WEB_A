import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  isSignup: false,
  isPending: false,
  isLogin: false,
};

export const signUpApi = createAsyncThunk("signUp", async (body) => {
  const response = await axios.post("http://localhost:8080/auth/signup", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.data;
});

export const loginApi = createAsyncThunk("login", async (body) => {
  const response = await axios.post("http://localhost:8080/auth/login", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.data;
});

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      state.isSignup = false;
      state.isPending = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpApi.pending, (state, action) => {
        state.isSignup = false;
        state.isPending = true;
      })
      .addCase(signUpApi.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isSignup = true;
        state.isPending = false;
      })
      .addCase(signUpApi.rejected, (state, action) => {
        state.isSignup = false;
        state.isPending = false;
      })
      .addCase(loginApi.pending, (state, action) => {
        state.isLogin = false;
        state.isPending = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("token", state.token);
        state.isLogin = true;
        state.isPending = false;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLogin = false;
        state.isPending = false;
      });
  },
});

export const { logout } = signUpSlice.actions;
// 슬라이스는 각 파일마다 하나만 쓸 수 있다!

export default signUpSlice.reducer;
