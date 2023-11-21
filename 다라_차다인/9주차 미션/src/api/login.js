import axios from "axios";

export const login = (loginData) => {
    const { userId, password } = loginData;
    return axios
        .post("http://localhost:8080/auth/login", {
            username: userId,
            password: password,
        })
        .then((res) => {
            if (res.request.status === 200) {
                localStorage.setItem("accessToken", res.data.token);
                localStorage.setItem("username", res.data.username);
                return true;
            }
        })
        .catch((res) => {
            if (res.request.status === 401) {
                alert("아이디 및 비밀번호를 다시 확인해주세요.");
            }
            return false;
        })
}