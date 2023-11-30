import axios from "axios";

export const signup = async (value) => {
    const { firstName, lastName, age, password, username } = value;
    try {
        const res = await axios.post(`https://dummyjson.com/users/add`, {
            firstName: firstName,
            lastName: lastName,
            age: age,
            password: password,
            username: username,
        });
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}