//import axios from "axios";
import { useState, useEffect } from "react";

export const SearchData = ({ keyword }) => {
  //const { keyword } = props;
  const [searchData, setSearchData] = useState([]); // 초기값을 빈 배열로 설정(map 쓸 때 오류 발생)
  const [isLoading, setLoad] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
    },
  };

  const getSearch = async () => {
    console.log("getSearch is called");
    try {
      const response = await (
        await fetch(
          "https://api.themoviedb.org/3/search/movie?query=superman&include_adult=false&language=en-US&page=1",
          options
        )
      ).json();

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      // setSearchData(responseData.results);
      // setLoad(false);
      console.log("response: ", response);
      return response;
    } catch (error) {
      console.error("Error:", error);
      //throw error;
    }
    /*
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=superman&include_adult=false&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setSearchData(response.data.results);
        setLoad(false);
      })
      .catch((err) => console.error(err));
      */
  };

  useEffect(() => {
    //렌더링시 getSearch를 호출해서 리턴값을 setSearchMovie에 넣음
    getSearch(keyword).then(setSearchData);
  }, [keyword]);

  return [searchData, isLoading];
};
