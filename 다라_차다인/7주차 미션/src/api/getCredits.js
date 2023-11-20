import axios from "axios";

export const getCredits = async ({ id, language }) => {
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
        return data;
    } catch (e) {
        console.log(e);
    }
};