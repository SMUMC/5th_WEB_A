import axios from "axios";

export const userLogin = async (value) => {
    const { username, password } = value;
    try {
        const res = await axios.post(`https://dummyjson.com/auth/login`, {
            username: 'kminchelle',
            password: '0lelplR',
        });
        // localStorage.setItem("accessToken", res.data.token);
        // localStorage.setItem("username", res.data.username);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}