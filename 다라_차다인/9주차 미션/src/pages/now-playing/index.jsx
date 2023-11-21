import React, { useState } from "react";
import * as S from "./NowPlaying.styled";
import { MovieList } from "../../components/MovieList";
import useCustomGetDataThrottle from "../../api/useCustomGetDataThrottle";

export const Nowplaying = () => {
  const [page, setPage] = useState(1);
  const customGetDataProps = {
    type: "now_playing",
    language: "ko-KR",
    page: page,
    setPage: setPage,
  };
  const { loading, error, data } = useCustomGetDataThrottle(customGetDataProps);

  return (
    <S.Container>
      <MovieList movieData={data} loading={loading} />
    </S.Container>
  );
}
