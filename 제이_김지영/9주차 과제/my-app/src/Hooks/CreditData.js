import { useState, useEffect } from "react";

//https://developer.themoviedb.org/reference/movie-credits

export const useCreditData = (movie_id) => {
  const [creditData, setCreditData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movie_id) return;

    const fetchData = async () => {
      //console.log("fetchData!"); //fetch한 데이터가 안 불러와져서 여기까지는 불러와지는지 test (debugging)
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
            },
          }
        );

        // console.log("response: ", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json(); //responseData 구조파악 //responseData.id
        // console.log("responseData: ", responseData);
        //setCreditData(responseData.result);
        setCreditData(responseData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movie_id]);

  return [creditData, isLoading];
};
