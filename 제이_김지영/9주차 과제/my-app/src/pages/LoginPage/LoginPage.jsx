import * as S from "./LoginPage.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "Hooks/api";
import { useSelector, useDispatch } from "react-redux"; //isLoggedIn, setIsLoggedIn

export default function Login() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const IdRegex = /^[a-z]+[a-z0-9]{5,19}$/g;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;

  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [IdMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [Id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateField = (value, regex, setMessage, successCheck) => {
    if (value === "") {
      setMessage("아이디를 입력해주세요!");
    } else if (!regex.test(value)) {
      setMessage("형식에 맞게 입력해주세요!");
    } else {
      setMessage(" ");
      successCheck(true);
    }
  };

  useEffect(() => {
    validateField(Id, IdRegex, setIdMessage, setIsId);
  }, [Id]);

  useEffect(() => {
    if (password === "") {
      setPasswordMessage("비밀번호를 입력해주세요!");
    } else if (password.length < 4) {
      setPasswordMessage("비밀번호는 최소한 4자리 이상이어야합니다.");
    } else if (password.length > 12) {
      setPasswordMessage("비밀번호는 최대 12자리까지 입력가능합니다.");
    } else if (passwordRegex.test(password) === false) {
      setPasswordMessage("비밀번호 형식에 알맞게 입력해주세요.");
    } else {
      setPasswordMessage(" ");
      setIsPassword(true);
    }
  }, [password]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (isId && isPassword) {
      //console.log("event: ", event);
      postLogin({
        password: password,
        username: Id,
      }).then((res) => {
        if (res.success === true) {
          alert("로그인에 성공했습니다!");
          //로그인 기억하게 하는 코드
          console.log("res: ", res);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("username", res.username);
          localStorage.setItem("token", res.token);
          //setIsLoggedIn(true);
          dispatch({ type: "SET_LOGGED_IN", payload: true });
          // 로그인 페이지로 이동
          navigate("/");
        } else {
          alert("로그인에 실패하였습니다. 이유: ", res.message);
        }
      });
    } else {
      console.log("");
    }
  };

  return (
    <S.Container>
      <div className="login-container">
        <div className="box-title">
          <h1>로그인 페이지</h1>
        </div>
        <hr />
        <form method="POST" name="SignUp" onSubmit={submitHandler}>
          <input
            placeholder="아이디"
            onChange={(event) => setId(event.target.value)}
          ></input>
          {IdMessage && <span>{IdMessage}</span>}

          <input
            placeholder="비밀번호"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          {passwordMessage && <span>{passwordMessage}</span>}

          <button type="submit">로그인하기</button>
        </form>
      </div>
    </S.Container>
  );
}
