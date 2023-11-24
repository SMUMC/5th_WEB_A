import axios from "axios";

export const fetchCustomGetData = (type, language, page) => {
    return axios.get(
        `${process.env.REACT_APP_MOVIE_BASE_URL}${type}?language=${language}&page=${page}`,
        {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        }
    );
}