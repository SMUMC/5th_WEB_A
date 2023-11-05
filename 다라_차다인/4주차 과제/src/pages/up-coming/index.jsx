import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from "./UpComing.styled";
import { MovieList } from "../movieList";

const customGetDataProps = {
  type: "upcoming",
  language: "ko-KR",
  page: "1",
};

export const loader = async () => {
  const datam = await customGetData(customGetDataProps);
  return datam;
};

export const UpComing = () => {
    return (
      <S.Contaier>
        <MovieList />
      </S.Contaier>
  );
}
