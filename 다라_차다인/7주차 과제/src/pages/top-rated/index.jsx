import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from "./TopRated.styled";
import { MovieList } from "../../components/MovieList";


const customGetDataProps = {
  type: "top_rated",
  language: "ko-KR",
  page: "1",
};

export const loader = async () => {
  const datam = await customGetData(customGetDataProps);
  return datam;
};

export const TopRated = () => {
  return (
    <S.Container>
      <MovieList />
    </S.Container>
  );
}
