import React, { useState } from "react";
import * as S from "./TopRated.styled";
import { MovieList } from "../../components/MovieList";
import useCustomGetData from "../../api/useCustomGetData";

export const TopRated = () => {
  const [page, setPage] = useState(1);
  const customGetDataProps = {
    type: "top_rated",
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
