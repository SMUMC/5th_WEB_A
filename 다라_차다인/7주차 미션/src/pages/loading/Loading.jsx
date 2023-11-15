import React from "react";
import * as S from "./Loading.styled";

export default function Loading() {
  return (
    <S.Background>
      <S.LoadingText>영화를 불러오고 있습니다..</S.LoadingText>
      <S.Loader/>
    </S.Background>
  );
}