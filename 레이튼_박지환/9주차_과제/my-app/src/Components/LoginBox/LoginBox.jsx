import * as S from "./LoginBox.styled";
import UseIdValidation from "../../Hooks/UseIdValidation";
import UsePasswordValidation from "../../Hooks/UsePasswordValidation";
import SignUpInput from "../SignUpInput/SignUpInput";
import { loginApi } from "../../Redux/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginBox() {
  const idRegex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idValidation = UseIdValidation("", idRegex);
  const passwordValidation = UsePasswordValidation("", passwordRegex);

  const {
    value: password,
    isValid: isPassword,
    errorMessage: passwordMessage,
    onChange: handlePasswordChange,
  } = passwordValidation;

  const {
    value: id,
    isValid: isId,
    errorMessage: idMessage,
    onChange: handleIdChange,
  } = idValidation;

  const submitHandler = (event) => {
    event.preventDefault();
    if (isId && isPassword) {
      dispatch(
        loginApi({
          username: id,
          password: password,
        })
      );
      navigate("/");
    } else {
      console.log("");
    }
  };

  return (
    <S.Container>
      <form method="POST" name="Login" onSubmit={submitHandler}>
        <h1>로그인 페이지</h1>
        <SignUpInput
          placeholder="아이디"
          value={id}
          onChange={handleIdChange}
          errorMessage={idMessage}
        ></SignUpInput>
        <SignUpInput
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={handlePasswordChange}
          errorMessage={passwordMessage}
        ></SignUpInput>
        <button type="submit" disabled={!isPassword || !isId}>
          제출하기
        </button>
      </form>
    </S.Container>
  );
}
