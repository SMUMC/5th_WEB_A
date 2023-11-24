import React from "react";
import * as S from "./Banner.styled";
import { useSelector } from "react-redux";

export const Banner = () => {
    const name = useSelector((state) => state.user.name);
    const isLoading = useSelector((state) => state.user.loading);
    const isLogin = useSelector((state) => state.login.isLogin);

    return (
        <S.Container>
            {isLoading && <S.Content>로딩 중입니다..</S.Content>}
            {name && !isLoading && isLogin ? <S.Content>{name}님 환영합니다!</S.Content>
                : <S.Content>환영합니다</S.Content>}
        </S.Container>
    );
};
