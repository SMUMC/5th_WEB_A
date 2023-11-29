import React, { useState } from "react";
import * as S from "./UpComing.styled";
import { MovieList } from "../../components/MovieList";
import useCustomGetData from "../../api/useCustomGetData";

export const UpComing = () => {
  const [page, setPage] = useState(1);
  const customGetDataProps = {
    type: "upcoming",
    language: "ko-KR",
    page: page,
  };
  const { loading, error, data } = useCustomGetData(customGetDataProps);

  return (
    <S.Container>
      <MovieList movieData={data} loading={loading} />
    </S.Container>
  );
}
