import { useState } from "react";

export default function UsePasswordValidation(initValue, regex) {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (value) => {
    setValue(value);
    if (value === "") {
      setErrorMessage("반드시 비밀번호를 입력해주세요!");
    } else if (value.length < 4) {
      setErrorMessage("비밀번호는 최소한 4자리 이상이어야합니다.");
    } else if (value.length > 12) {
      setErrorMessage("비밀번호는 최대 12자리까지 입력가능합니다.");
    } else if (regex.test(value) === false) {
      setErrorMessage("비밀번호 형식에 알맞게 입력해주세요.");
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  return {
    value,
    isValid,
    errorMessage,
    onChange: handlePasswordChange,
  };
}
