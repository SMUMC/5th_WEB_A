import axios from "axios";

export const getPostComments = async (id) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts/${id}/comments`, {});
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}