import React, { useEffect, useState } from "react";
import * as S from "./Popular.styled";
import { MovieList } from "../../components/MovieList";
import { SkeletonElement } from "../../uis/Skeleton";
import { fetchCustomGetData } from "../../api/fetchCustomGetData";
import { useQuery, useQueryClient } from "react-query";

export const Popular = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const {
    data,
    isLoading,
    isError
  } = useQuery(
    ["movie-data", page],
    () => fetchCustomGetData("popular", "ko-KR", page),
    {
      staleTime: 6000,
      cacheTime: 36000,
      keepPreviousData: true,
    }
  );
  const movieData = data?.data?.results || [];

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery(["movie-data", nextPage], () =>
      fetchCustomGetData("popular", "ko-KR", nextPage)
    );
  }, [page, queryClient]);

  const onClickPageDown = () => {
    if (!isLoading && page !== 1) {
      setPage(page - 1);
    } else {
      alert('가장 첫번째 페이지 입니다.');
    }
  }

  const onClickPageUp = () => {
    if (!isLoading) setPage(page + 1);
  }

  return (
    <S.Container>
      {isLoading ?
        <S.SkeletonContainer>
          {Array(20).fill(null).map((_, index) => <SkeletonElement key={index} />)}
        </S.SkeletonContainer>
        :
        <>
          <MovieList movieData={movieData} loading={isLoading} />
          <S.PageContainer>
            <S.ArrowLeft onClick={onClickPageDown} page={page}>{"<"}</S.ArrowLeft>
            <p>{page}</p>
            <S.ArrowRight onClick={onClickPageUp}>{">"}</S.ArrowRight>
          </S.PageContainer>
        </>
      }
    </S.Container>
  );
}
