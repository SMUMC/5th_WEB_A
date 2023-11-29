import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/login";

export const loginActions = createAsyncThunk("auth/login", async (credential) => {
    try {
        const res = await login(credential.id, credential.password);
        // console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
})