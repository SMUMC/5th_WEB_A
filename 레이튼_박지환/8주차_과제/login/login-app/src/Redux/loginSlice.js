import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: null,
  message: "",
  loading: false,
  isLogin: false,
};

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
        state.message = action.payload.message;
        state.isLogin = action.payload.isSuccess;
        state.token = action.payload.result.AccessToken;
        localStorage.setItem("token", action.payload.result.AccessToken);

        state.loading = false;
        console.log(action.payload);
        // console.log(action.payload.result.AccessToken);
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.isLogin = action.payload.isSuccess;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
