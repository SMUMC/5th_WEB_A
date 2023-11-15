import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from  "./NowPlaying.styled";
import { MovieList } from "../../components/movieList/index";

const customGetDataProps = {
  type: "now_playing",
  language: "ko-KR",
  page: "1",
};

export const loader = async () => {
  const datam = await customGetData(customGetDataProps);
  return datam;
};

export const Nowplaying = () => {
    return (
      <S.Contaier>
        <MovieList />
      </S.Contaier>
  );
}
