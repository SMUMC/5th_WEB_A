import React from "react";
import * as S from "./Loading.styled";
// import loadingImg from "../../assets/gif/LoadingImg.gif";

export default function Loading() {
  return (
    <S.Background>
      <S.LoadingText>영화를 불러오고 있습니다..</S.LoadingText>
      {/* <img src={loadingImg} alt="로딩중" width="5%" /> */}
      <S.Loader/>
    </S.Background>
  );
}