import * as S from "../SignUpBox/SignUpBox.styled";
import { useState, useEffect } from "react";
export default function SignUpBox() {
  const nameRegex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ageRegex = /^(1[9]|[2-9][0-9])$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;

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

  useEffect(() => {
    if (nameRegex.test(name) === false) {
      setNameMessege("반드시 이름을 입력해주세요!");
    } else {
      setNameMessege("");
      setIsName(true);
    }
  }, [name]);

  useEffect(() => {
    if (email === "") {
      setEmailMessege("반드시 이메일을 입력해주세요!");
    } else if (emailRegex.test(email) === false) {
      setEmailMessege("이메일 형식에 맞게 입력해주세요!");
    } else {
      setEmailMessege("");
      setIsEmail(true);
    }
  }, [email]);

  useEffect(() => {
    if (age === "" || isNaN(age)) {
      // 숫자 판별
      setAgeMessege("반드시 숫자를 입력해주세요!");
    } else if (age < 0) {
      setAgeMessege("음수가 될 수 없습니다!");
    } else if (age % 1 !== 0) {
      setAgeMessege("소수가 될 수 없습니다!");
    } else if (age < 19) {
      setAgeMessege("19살 이상만 가능합니다!");
    } else {
      setAgeMessege("");
      setIsAge(true);
    }
  }, [age]);

  useEffect(() => {
    if (password === "") {
      setPasswordMessege("반드시 비밀번호를 입력해주세요!");
    } else if (password.length < 4) {
      setPasswordMessege("비밀번호는 최소한 4자리 이상이어야합니다.");
    } else if (password.length > 12) {
      setPasswordMessege("비밀번호는 최대 12자리까지 입력가능합니다.");
    } else if (passwordRegex.test(password) === false) {
      setPasswordMessege("비밀번호 형식에 알맞게 입력해주세요.");
    } else {
      setPasswordMessege("");
      setIsPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (checkPassword !== password || checkPassword === "") {
      setCheckPasswordMessege(
        "작성한 비밀번호와 동일하지 않습니다! 다시한번 입력해주세요!"
      );
    } else if (checkPassword === password) {
      setCheckPasswordMessege("");
      setIsCheckPassword(true);
    }
  }, [checkPassword]);

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
        <input
          placeholder="이름"
          onChange={(event) => setName(event.target.value)}
        ></input>
        {nameMessage && <span>{nameMessage}</span>}
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
    </S.Container>
  );
}
