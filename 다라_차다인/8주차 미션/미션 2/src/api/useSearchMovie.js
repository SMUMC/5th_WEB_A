import axios from "axios";
import useDebounce from "../util/useDecounce";
import { useEffect, useState } from "react";

function useSearchMovie({ query, type, includeAdult, language, page }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const debouncedQuery = useDebounce(query, 250);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const url = `${process.env.REACT_APP_MOVIE_SEARCH_BASE_URL}${type}?include_adult=${includeAdult}&language=${language}&page=${page}&query=${query}`;
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            };
            try {
                const response = await axios(url, options);
                const data = response.data.results;

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
        if (debouncedQuery) {
            fetchData();
        }
    }, [debouncedQuery]);
    return { loading, error, data };
}

export default useSearchMovie;