import React from "react";
import * as S from "./Banner.styled";
import useGetUserData from "../../api/getUserData";

export const Banner = () => {
    const accessToken = localStorage.getItem("accessToken");
    const { loading, error, data } = useGetUserData(accessToken);

    return (
        <S.Container>
            {loading && <S.Content>로딩 중입니다..</S.Content>}
            {data?.username && !loading ? <S.Content>{data?.username}님 환영합니다!</S.Content>
                : <S.Content>환영합니다</S.Content>}
        </S.Container>
    );
};
