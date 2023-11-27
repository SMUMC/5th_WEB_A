import { useState } from "react";

export default function UseIdValidation(initValue, regex) {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleIdChange = (newValue) => {
    setValue(newValue);
    if (regex.test(value) === false) {
      setErrorMessage("반드시 아이디를 입력해주세요!");
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };

  return {
    value,
    isValid,
    errorMessage,
    onChange: handleIdChange,
  };
}
