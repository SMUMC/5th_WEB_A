import { createSlice } from "@reduxjs/toolkit";
import { getUserDataActions } from "../actions/getUserDataActions";

export const initialState = {
    username: "",
    name: "",
    age: "",
    email: "",
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserDataActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserDataActions.fulfilled, (state, { payload }) => {
                // console.log(payload);
                state.username = payload.data.username;
                state.name = payload.data.name;
                state.age = payload.data.age;
                state.email = payload.data.email;
                state.loading = false;
            })
            .addCase(getUserDataActions.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });
    }
});

export default userSlice.reducer;