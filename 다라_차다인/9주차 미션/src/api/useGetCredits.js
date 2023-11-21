import axios from "axios";
import { useEffect, useState } from "react";

function useGetCredits({ id, language }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            const url = `${process.env.REACT_APP_MOVIE_BASE_URL}${id}/credits?language=${language}`;
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            };
            try {
                const response = await axios(url, options);
                const data = response.data.cast;

                if (response.status !== 200) {
                    throw new Error('에러가 발생했습니다!');
                }
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchdata();
    }, []);
    return { loading, error, data };
}

export default useGetCredits;