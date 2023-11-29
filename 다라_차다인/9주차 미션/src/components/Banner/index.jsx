import React from "react";
import * as S from "./Banner.styled";
import { useSelector } from "react-redux";

export const Banner = () => {
    const userId = useSelector((state) => state.login.userId);
    const isLoading = useSelector((state) => state.login.loading);
    const isLogin = useSelector((state) => state.login.isLogin);

    return (
        <S.Container>
            {isLoading && <S.Content>로딩 중입니다..</S.Content>}
            {userId && !isLoading && isLogin ? <S.Content>{userId}님 환영합니다!</S.Content>
                : <S.Content>환영합니다</S.Content>}
        </S.Container>
    );
};
