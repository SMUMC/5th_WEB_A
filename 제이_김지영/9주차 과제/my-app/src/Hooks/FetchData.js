import axios from "axios";
import { useState, useEffect } from "react";

export function FetchData(category, page) {
  //async()로 해주면 그 안에 useEffect를 못 써서 function으로 해줘야함
  //useEffect 쓸 필요 없을 때 async라고 처음부터 해줘도 됨 (api.js)
  const [isData, setData] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      console.log("fetch data");
      setLoad(true);
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${category}`,
        params: { language: "ko-KR", page }, //{ language: "ko-KR", page: "1" },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
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
    fetchMovie();
  }, [category, page]); //디펜던시로 category만 주면 pagination 작동 안 함! page도 당연히 함께 줘야 함
  return { isData, isLoading };
}


