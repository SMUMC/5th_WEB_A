import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from "./TopRated.styled";
import { MovieList } from "../movieList";


const customGetDataProps = {
  type: "top_rated",
  language: "ko-KR",
  page: "1",
};

export const loader = () => {
  const datam = customGetData(customGetDataProps);
  return datam;
};

export const TopRated = () => {
    return (
      <S.Contaier>
        <MovieList />
      </S.Contaier>
  );
}
