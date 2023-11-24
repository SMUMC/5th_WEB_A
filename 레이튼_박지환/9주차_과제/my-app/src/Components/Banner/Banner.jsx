import * as S from "../Banner/Banner.style";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Banner() {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");

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
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, [isLoading]);
  console.log(data);
  return (
    <S.BannerContainer>
      {isLoading ? (
        <h2>로딩중 입니다!</h2>
      ) : (
        <>
          <h1>Break The Rules</h1>
          {data ? <h2>{data}님 환영합니다!</h2> : <h2>환영합니다.</h2>}
          <h3>기말고사 파이팅!</h3>
        </>
      )}
    </S.BannerContainer>
  );
}
