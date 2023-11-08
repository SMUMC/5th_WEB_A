import React, { useState } from "react";
import * as S from "./SignupPage.styled";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const isUserName = (value) => {
    return value.length >= 1;
  };

  const isUserAge = (value) => {
    value = parseInt(value);
    return value >= 19 && Number.isInteger(value);
  };

  const isEmailForm = (value) => {
    return value.includes("@");
  };

  const isPasswordRule = (value) => {
    const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    return regex.test(value);
  };

  const isPasswordMatch = (value1) => {
    return value1 === password;
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "name":
        setUserName(value);
        break;
      case "age":
        setUserAge(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "pw":
        setPassword(value);
        break;
      case "pw-check":
        setPasswordCheck(value);
        break;
      default:
        break;
    }
  };

  // 여기에서 버튼 활성화 로직 추가
  useState(() => {
    const check =
      isUserName(userName) &&
      isUserAge(userAge) &&
      isEmailForm(email) &&
      isPasswordRule(password) &&
      isPasswordMatch(passwordCheck);

    setIsButtonDisabled(!check); //check이 true이면 버튼 활성화
  }, [userName, userAge, email, password, passwordCheck]);

  const handleSubmit = () => {
    console.log("button clicked!");
    setTimeout(function () {
      alert("가입이 완료되었습니다.");
    }, 0);
  };

  return (
    <S.Container>
      <div className="login-container">
        <h1 className="box-title">회원 가입</h1>
        <hr className="hr" />
        <form action="" className="login-form">
          <p style={{ marginBottom: "18px" }}>
            <label
              htmlFor="name"
              style={{ fontSize: "12px" }}
              className="label"
            ></label>
            <input
              type="text"
              placeholder="이름"
              id="name"
              value={userName}
              onChange={handleInputChange}
            />
          </p>
          <p style={{ marginBottom: "18px" }}>
            <label
              htmlFor="email"
              style={{ fontSize: "12px" }}
              className="label"
            ></label>
            <input
              type="text"
              placeholder="이메일"
              id="email"
              value={email}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <label
              htmlFor="age"
              style={{ fontSize: "12px" }}
              className="label"
            ></label>
            <input
              type="number"
              placeholder="나이"
              id="age"
              value={userAge}
              onChange={handleInputChange}
            />
            <label
              style={{
                color: "red",
                marginTop: "2px",
                marginLeft: "8px",
                fontSize: "12px",
              }}
            >
              {userAge !== "" && userAge < 0
                ? "나이는 0살 이상이어야 합니다."
                : ""}
              {userAge !== "" && userAge >= 0 && userAge < 19
                ? "나이는 19살 이상이어야 합니다."
                : ""}
              {userAge !== "" && !Number.isInteger(parseInt(userAge))
                ? "정수를 입력하세요."
                : ""}
            </label>
          </p>
          <p>
            <label
              htmlFor="pw"
              style={{ fontSize: "12px" }}
              className="label"
            ></label>
            <input
              type="text"
              placeholder="비밀번호"
              id="pw"
              value={password}
              onChange={handleInputChange}
            />
            <label
              style={{
                color: "red",
                marginTop: "2px",
                marginLeft: "8px",
                fontSize: "12px",
              }}
            >
              {!isPasswordRule
                ? "알파벳, 숫자, 특수문자가 1개 이상 들어가야 합니다."
                : ""}
            </label>
          </p>
          <p>
            <label
              htmlFor="pw-check"
              style={{ fontSize: "12px" }}
              className="label"
            ></label>
            <input
              type="text"
              placeholder="비밀번호 확인"
              id="pw-check"
              value={passwordCheck}
              onChange={handleInputChange}
            />
            <label
              style={{
                color: "red",
                marginTop: "2px",
                marginLeft: "8px",
                fontSize: "12px",
              }}
            >
              {!isPasswordMatch ? "비밀번호가 같지 않습니다." : ""}
            </label>
          </p>
          <p>
            <button
              className="submit-button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              가입하기
            </button>
          </p>
        </form>
      </div>
    </S.Container>
  );
}

export default SignUp;
