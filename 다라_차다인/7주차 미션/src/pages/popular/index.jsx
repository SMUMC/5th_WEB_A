import React from "react";
import { customGetData } from "../../api/customGetData";
import * as S from "./Popular.styled";
import { MovieList } from "../../components/MovieList";

const customGetDataProps = {
  type: "popular",
  language: "ko-KR",
  page: "1",
};

export const loader = async () => {
  const datam = await customGetData(customGetDataProps);
  return datam;
};

export const Popular = () => {
  return (
    <S.Container>
      <MovieList />
    </S.Container>
  );
}
