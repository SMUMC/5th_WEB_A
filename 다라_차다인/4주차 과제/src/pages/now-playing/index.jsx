import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from  "./NowPlaying.styled";
import { MovieList } from "../movieList";

const customGetDataProps = {
  type: "now_playing",
  language: "ko-KR",
  page: "1",
};

export const loader = () => {
  const datam = customGetData(customGetDataProps);
  return datam;
};

export const Nowplaying = () => {
    return (
      <S.Contaier>
        <MovieList />
      </S.Contaier>
  );
}
