import React from "react";
import { useRouteError } from "react-router-dom";
import * as S from "./ErrorPage.styled";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <S.Container>
            <S.Title>Oops!</S.Title>
            <S.Content>예상치 못한 에러가 발생했습니다；′⌒`</S.Content>
            <S.Content>
                <i>{error.statusText || error.message}</i>
            </S.Content>
            <S.LinkLayout to="/">메인으로 이동하기</S.LinkLayout>
        </S.Container>
    );
}
