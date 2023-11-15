import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/user/login";

export const loginUser = createAsyncThunk("user/login", async (credentials) => {
    try {
        console.log("id: ", credentials.id, "pw: ", credentials.password)
        const response = await login(credentials.id, credentials.password);
        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
});