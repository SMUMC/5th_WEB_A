import axios from "axios";
import { useState, useEffect } from "react";

//open API가 아니라 백엔드 서버 코드 자료 연결

//이제 회원가입 말고 로그인 페이지 만들어서
//로그인 성공하면 홈으로 navigate하고
//실패하면 다시 입력하라고 하면 됨

export function LoginData(pages) {
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      const options = {
        method: "POST",
        url: `localhost:3000/user/login`, //서버 매뉴얼
        data: {
          id: "umcweb",
          pw: "1234",
        },
      };
      try {
        const response = await axios(options);
        setData(response.data.results);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pages]);
  return { isData, isLoading };
}
