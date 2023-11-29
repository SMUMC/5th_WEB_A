import axios from "axios";

export const signup = (signupData) => {
    const { username, userId, email, age, password, checkpassword } = signupData;
    return axios
        .post('http://localhost:8080/auth/signup', {
            name: username,
            email: email,
            age: age,
            username: userId,
            password: password,
            passwordCheck: checkpassword
        })
        .then((res) => {
            if (res.request.status === 201) {
                localStorage.setItem("accessToken", res.data.token);
                localStorage.setItem("username", res.data.username);
                return true;
            }
        })
        .catch((res) => {
            if (res.request.status === 409) {
                alert("이미 존재하는 아이디 입니다.");
            } else if (res.request.status === 400) {
                alert(res.response.message);
            }
            return false;
        })
}