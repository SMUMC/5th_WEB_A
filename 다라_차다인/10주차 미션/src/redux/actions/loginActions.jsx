import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "../../api/userLogin";

export const loginActions = createAsyncThunk("auth/login", async (credential) => {
    try {
        const res = await userLogin(credential.username, credential.password);
        // console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
})