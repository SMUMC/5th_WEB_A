import { createSlice } from "@reduxjs/toolkit";
import { loginActions } from "../actions/loginActions";

export const initialState = {
    loading: false,
    token: "",
    id: 0,
    username: "",
    isLogin: false,
    followList: [
        {
            id: 1,
            name: "레이튼",
            group: "UMC web A",
            follow: true,
        },
        {
            id: 2,
            name: "매튜",
            group: "UMC web A",
            follow: true,
        },
        {
            id: 3,
            name: "제이",
            group: "UMC web A",
            follow: true,
        }
    ],
    followerList: [
        {
            id: 1,
            name: "레이튼",
            group: "UMC web A",
            follow: false,
        },
        {
            id: 2,
            name: "매튜",
            group: "UMC web A",
            follow: false,
        },
        {
            id: 3,
            name: "제이",
            group: "UMC web A",
            follow: false,
        }
    ],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logout(state) {
            Object.assign(state, initialState);
            localStorage.clear();
        },
        following(state, action) {
            const userIdToAdd = action.payload;

            state.followList = state.followList.map(user =>
                user.id === userIdToAdd ? { ...user, follow: true } : user
            );
        },
        unFollowing(state, action) {
            const userIdToRemove = action.payload;

            state.followList = state.followList.map(user =>
                user.id === userIdToRemove ? { ...user, follow: false } : user
            );
        },
        newFollowing(state, action) {
            const { id, name, group, follow } = action.payload;
            const newFollow = {
                id: id,
                name: name,
                group: group,
                follow: follow,
            }
            state.followList.push(newFollow);
        },
        removeUnfollowed(state) {
            console.log("a");
            state.followList = state.followList.filter(user => user.follow === true);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginActions.fulfilled, (state, { payload }) => {
                // console.log(payload);
                const token = payload.token;
                const username = payload.username;
                const id = payload.id;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("username", username);
                state.token = token;
                state.username = username;
                state.id = id;
                state.loading = false;
                state.isLogin = true;
            })
            .addCase(loginActions.rejected, (state, { payload }) => {
                // console.log(payload);
                state.loading = false;
            });
    }
});

export const { logout, login, following, unFollowing, newFollowing, removeUnfollowed } = userSlice.actions;
export default userSlice.reducer;