import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserData = (accessToken) => {
    return axios
        .get("http://localhost:8080/auth/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((res) => {
            // if (res.request.status === 200) {
            return res;
            // }
        })
        .catch((res) => {
            if (res.request.status === 404) {
                return {};
            }
        })
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const url = "http://localhost:8080/auth/me";
    //         const options = {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`
    //             }
    //         };
    //         try {
    //             const res = await axios(url, options);
    //             const data = res.data;
    //             if (res.request.status === 404) {
    //                 throw new Error('토큰이 유효하지 않습니다.');
    //             }
    //             setData(data);
    //         } catch {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchdata();
    // }, []);
    // return { loading, error, data };
}