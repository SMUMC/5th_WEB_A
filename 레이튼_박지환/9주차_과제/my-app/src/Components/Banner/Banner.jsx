import * as S from "../Banner/Banner.style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Banner() {
  const [data, setData] = useState(false);
  const isLogin = useSelector((state) => state.signUp.isLogin);
  const isPending = useSelector((state) => state.signUp.isPending);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:8080/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios(options);
        setData(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [isPending]);
  return (
    <S.BannerContainer>
      {isPending ? (
        <h2>로딩중 입니다!</h2>
      ) : (
        <>
          <h1>Break The Rules</h1>
          {token && isLogin ? (
            <h2>{data}님 환영합니다!</h2>
          ) : (
            <h2>환영합니다.</h2>
          )}
          <h3>기말고사 파이팅!</h3>
        </>
      )}
    </S.BannerContainer>
  );
}
