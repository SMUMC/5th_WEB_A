import * as S from "../SignUpBox/SignUpBox.styled";
import { useState, useEffect } from "react";
import SignUpInput from "../SignUpInput/SignUpInput";

export default function SignUpBox() {
  const nameRegex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ageRegex = /^(1[9]|[2-9][0-9])$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);

  const [nameMessage, setNameMessege] = useState("");
  const [emailMessage, setEmailMessege] = useState("");
  const [ageMessage, setAgeMessege] = useState("");
  const [passwordMessage, setPasswordMessege] = useState("");
  const [checkPasswordMessage, setCheckPasswordMessege] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleNameChange = (value) => {
    setName(value);
    if (nameRegex.test(value) === false) {
      setNameMessege("반드시 이름을 입력해주세요!");
    } else {
      setNameMessege("");
      setIsName(true);
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value === "") {
      setEmailMessege("반드시 이메일을 입력해주세요!");
    } else if (emailRegex.test(value) === false) {
      setEmailMessege("이메일 형식에 맞게 입력해주세요!");
    } else {
      setEmailMessege("");
      setIsEmail(true);
    }
  };

  const handleAgeChange = (value) => {
    setAge(value);
    if (value === "" || isNaN(value)) {
      setAge(value);
      setAgeMessege("반드시 숫자를 입력해주세요!");
    } else if (value < 0) {
      setAgeMessege("음수가 될 수 없습니다!");
    } else if (value % 1 !== 0) {
      setAgeMessege("소수가 될 수 없습니다!");
    } else if (value < 19) {
      setAgeMessege("19살 이상만 가능합니다!");
    } else {
      setAgeMessege("");
      setIsAge(true);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value === "") {
      setPasswordMessege("반드시 비밀번호를 입력해주세요!");
    } else if (value.length < 4) {
      setPasswordMessege("비밀번호는 최소한 4자리 이상이어야합니다.");
    } else if (value.length > 12) {
      setPasswordMessege("비밀번호는 최대 12자리까지 입력가능합니다.");
    } else if (passwordRegex.test(value) === false) {
      setPasswordMessege("비밀번호 형식에 알맞게 입력해주세요.");
    } else {
      setPasswordMessege("");
      setIsPassword(true);
    }
  };

  const handlePassWordReapeat = (value) => {
    setCheckPassword(value);
    if (value !== password || value === "") {
      setCheckPasswordMessege(
        "작성한 비밀번호와 동일하지 않습니다! 다시한번 입력해주세요!"
      );
    } else if (value === password) {
      setCheckPasswordMessege("");
      setIsCheckPassword(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isName && isEmail && isAge && isPassword && isCheckPassword) {
      alert("회원가입에 성공했습니다!");
      window.location.href = "http://localhost:3000/";
      console.log(); // 객체 형태로 어케 출력?
    } else {
      console.log("");
    }
  };

  return (
    <S.Container>
      <h1>회원가입 페이지</h1>
      <form method="POST" name="SignUp" onSubmit={submitHandler}>
        <SignUpInput
          placeholder="이름"
          value={name}
          onChange={handleNameChange}
          errorMessage={nameMessage}
        ></SignUpInput>
        <SignUpInput
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailMessage}
        ></SignUpInput>
        <SignUpInput
          placeholder="나이"
          value={age}
          onChange={handleAgeChange}
          errorMessage={ageMessage}
        ></SignUpInput>
        <SignUpInput
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={handlePasswordChange}
          errorMessage={passwordMessage}
        ></SignUpInput>
        <SignUpInput
          placeholder="비밀번호 확인"
          value={checkPassword}
          type="password"
          onChange={handlePassWordReapeat}
          errorMessage={checkPasswordMessage}
        ></SignUpInput>
        <button
          type="submit"
          disabled={
            !isName || !isAge || !isEmail || !isPassword || !isCheckPassword
          }
        >
          제출하기
        </button>
      </form>
    </S.Container>
  );
}
