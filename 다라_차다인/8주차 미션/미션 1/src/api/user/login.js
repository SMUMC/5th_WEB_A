import axios from "axios";

export const login = (id, password) => {
    return axios
        .post(`http://localhost:8080/user/login`, {
            id: id,
            pw: password,
        })
        .then((res) => {
            if (res.request.status === 200) {
                alert(res.data.message);
                return res;
            }
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}