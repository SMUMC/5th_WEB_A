import axios from "axios";
import { useEffect, useState } from "react";

export function CreditData(id) {
  const [isData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCredit = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      };
      try {
        setIsLoading(true);
        const response = await axios(options);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchCredit();
  }, [id]);
  return { isData, isLoading };
}
