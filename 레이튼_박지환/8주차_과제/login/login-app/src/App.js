import { useEffect, useState } from "react";
import { loginApi, logout } from "./Redux/loginSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();
  const { message, loading } = useSelector((state) => state.login);
  const token = localStorage.getItem("token");
  const selector = useSelector((state) => state.login);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    console.log(pw);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id: id, pw: pw });
    dispatch(loginApi({ id: "umcweb", pw: "1234" }));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log(isLogin);
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLogin ? (
        <input
          type="hidden"
          // value={id}
          onChange={handleId}
          defaultValue="umcweb"
          placeholder="아이디를 입력해주세요"
        />
      ) : (
        <input
          type="text"
          // value={id}
          onChange={handleId}
          defaultValue="umcweb"
          placeholder="아이디를 입력해주세요"
        />
      )}
      {isLogin ? (
        <input
          type="hidden"
          // value={pw}
          onChange={handlePw}
          defaultValue="1234"
          placeholder="비밀번호를 입력해주세요"
        />
      ) : (
        <input
          type="password"
          // value={pw}
          onChange={handlePw}
          defaultValue="1234"
          placeholder="비밀번호를 입력해주세요"
        />
      )}
      {isLogin ? (
        <button loading={loading ? "true" : "false"} onClick={handleLogout}>
          로그아웃{" "}
        </button>
      ) : (
        <button loading={loading ? "true" : "false"}>로그인</button>
      )}
      {isLogin ? <div>{token}</div> : <div>{token}</div>}
    </form>
  );
}

export default App;
