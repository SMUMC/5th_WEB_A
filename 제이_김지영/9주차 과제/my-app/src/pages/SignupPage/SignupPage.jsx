import * as S from "./SignupPage.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postSignup } from "Hooks/api";

export default function SignUp() {
  const nameRegex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const IdRegex = /^[a-z]+[a-z0-9]{5,19}$/g;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;

  const [isName, setIsName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);

  const [nameMessage, setNameMessage] = useState("");
  const [IdMessage, setIdMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [checkPasswordMessage, setCheckPasswordMessage] = useState("");

  const [name, setName] = useState("");
  const [Id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const navigate = useNavigate();

  const validateField = (value, regex, setMessage, successCheck) => {
    if (value === "") {
      setMessage("반드시 입력해주세요!");
    } else if (!regex.test(value)) {
      setMessage("형식에 맞게 입력해주세요!");
    } else {
      setMessage(" ");
      successCheck(true);
    }
  };

  useEffect(() => {
    validateField(name, nameRegex, setNameMessage, setIsName);
  }, [name]);

  useEffect(() => {
    validateField(Id, IdRegex, setIdMessage, setIsId);
  }, [Id]);

  useEffect(() => {
    validateField(email, emailRegex, setEmailMessage, setIsEmail);
  }, [email]);

  useEffect(() => {
    if (age === "" || isNaN(age)) {
      // 숫자 판별
      setAgeMessage("반드시 입력해주세요!");
    } else if (age < 0) {
      setAgeMessage("음수가 될 수 없습니다!");
    } else if (age % 1 !== 0) {
      setAgeMessage("소수가 될 수 없습니다!");
    } else if (age < 19) {
      setAgeMessage("19살 이상만 가능합니다!");
    } else {
      setAgeMessage(" ");
      setIsAge(true);
    }
  }, [age]);

  useEffect(() => {
    if (password === "") {
      setPasswordMessage("반드시 비밀번호를 입력해주세요!");
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

  useEffect(() => {
    if (checkPassword !== password || checkPassword === "") {
      setCheckPasswordMessage("작성한 비밀번호와 동일하지 않습니다!");
    } else if (checkPassword === password) {
      setCheckPasswordMessage(" ");
      setIsCheckPassword(true);
    }
  }, [checkPassword]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (isName && isId && isEmail && isAge && isPassword && isCheckPassword) {
      console.log("event: ", event);
      postSignup({
        name: name,
        email: email,
        age: age,
        password: password,
        passwordCheck: checkPassword,
        username: Id,
      }).then((res) => {
        if (res.success === true) {
          alert("회원가입에 성공했습니다!");

          navigate("/login"); // 로그인 페이지로 이동
        } else {
          alert("회원가입에 실패하였습니다. 이유: ", res.message);
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
          <h1>회원가입 페이지</h1>
        </div>
        <hr />
        <form method="POST" name="SignUp" onSubmit={submitHandler}>
          <input
            placeholder="이름"
            onChange={(event) => setName(event.target.value)}
          ></input>
          {nameMessage && <span>{nameMessage}</span>}
          <input
            placeholder="아이디"
            onChange={(event) => setId(event.target.value)}
          ></input>
          {IdMessage && <span>{IdMessage}</span>}
          <input
            placeholder="이메일"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          {emailMessage && <span>{emailMessage}</span>}
          <input
            placeholder="나이"
            onChange={(event) => setAge(event.target.value)}
          ></input>
          {ageMessage && <span>{ageMessage}</span>}
          <input
            placeholder="비밀번호"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          {passwordMessage && <span>{passwordMessage}</span>}
          <input
            placeholder="비밀번호 확인"
            type="password"
            onChange={(event) => setCheckPassword(event.target.value)}
          ></input>
          {checkPasswordMessage && <span>{checkPasswordMessage}</span>}
          <button type="submit">제출하기</button>
        </form>
      </div>
    </S.Container>
  );
}
