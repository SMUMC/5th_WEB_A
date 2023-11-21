import React, { useState } from "react";
import * as S from "./Popular.styled";
import { MovieList } from "../../components/MovieList";
import useCustomGetData from "../../api/useCustomGetData";
import { SkeletonElement } from "../../uis/Skeleton";

export const Popular = () => {
  const [page, setPage] = useState(1);
  const customGetDataProps = {
    type: "popular",
    language: "ko-KR",
    page: page,
  };
  const { loading, error, data } = useCustomGetData(customGetDataProps);

  const onClickPageDown = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      alert('가장 첫번째 페이지 입니다.');
    }
  }

  const onClickPageUp = () => {
    setPage(page + 1);
  }

  return (
    <>
      {loading ?
        <S.SkeletonContainer>
          {Array(20).fill(null).map((_, index) => <SkeletonElement key={index} />)}
        </S.SkeletonContainer>
        :
        <S.Container>
          <MovieList movieData={data} loading={loading} />
          <S.PageContainer>
            <S.ArrowLeft onClick={onClickPageDown} page={page}>{"<"}</S.ArrowLeft>
            <p>{page}</p>
            <S.ArrowRight onClick={onClickPageUp}>{">"}</S.ArrowRight>
          </S.PageContainer>
        </S.Container>
      }
    </>
  );
}
