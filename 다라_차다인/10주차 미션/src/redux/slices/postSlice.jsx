import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        post(state, action) {
            const { id, title, content, img } = action.payload;
            const newPost = {
                id: id,
                title: title,
                content: content,
                img: img,
            };
            state.posts.push(newPost);
        },
        deletePost(state, action) {
            const postIdToDelete = action.payload;
            state.posts = state.posts.filter((post) => post.id !== postIdToDelete);
        }
    },
});

export const { post, deletePost } = postSlice.actions;
export default postSlice.reducer;