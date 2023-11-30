import axios from "axios";

export const addNewComment = async ({ content, postId, userId }) => {
    try {
        const res = await axios.post(`https://dummyjson.com/comments/add`, {
            body: content,
            postId: postId,
            userId: userId,
        });
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}