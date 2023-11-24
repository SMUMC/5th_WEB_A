import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetUserData } from "../../api/getUserData";

export const getUserDataActions = createAsyncThunk("auth/me", async (credential) => {
    try {
        const res = await useGetUserData(credential);
        // console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
});