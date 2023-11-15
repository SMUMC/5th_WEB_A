import axios from "axios";

export const login = (id, password) => {
    return axios
        .post(`http://localhost:3000/user/login`, {
            id: id,
            pw: password,
        })
        .then((res) => {
            console.log(res);
            if (res.request.status === 200) {
                alert(res.data.message);
                return true;
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.response.status === 400) {
                alert(error.response.data.message);
                return false;
            }
            else if (error.response.status === 404) {
                alert(error.response.data.message);
                return false;
            }
            return false;
        });
}