import React, { useEffect } from "react";
import * as S from "./NowPlaying.styled";
import { MovieList } from "../../components/MovieList";
import { useInfiniteQuery } from "react-query";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useInView } from "react-intersection-observer";
import { SkeletonElement } from "../../uis/Skeleton";
import { throttle } from "lodash";
import { fetchCustomGetData } from "../../api/fetchCustomGetData";

export const Nowplaying = () => {
  const [ref, inview] = useInView();

  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['get-page'],
    ({ pageParam = 1 }) => fetchCustomGetData("now_playing", "ko-KR", pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const currentPage = lastPage.data ? lastPage.data.page : undefined;
        const totalPages = lastPage.data ? lastPage.data.total_pages : undefined;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      staleTime: 60000,
      cacheTime: 360000,
    },
  );

  const throttleFetchNextPage = throttle(fetchNextPage, 1000);

  useEffect(() => {
    if (inview && hasNextPage && !isFetching && !isLoading) {
      throttleFetchNextPage();
    }
  }, [isLoading, inview]);

  return (
    <S.Container>
      {isFetching ?
        <>
          <S.SkeletonContainer>
            {Array(20).fill(null).map((_, index) => <SkeletonElement key={index} />)}
          </S.SkeletonContainer>
          <S.LoadingSpinnerContainer ref={ref}>
            {isFetching ? <LoadingSpinner /> : null}
          </S.LoadingSpinnerContainer>
        </>
        :
        <>
          {data &&
            data.pages?.map((movie, i) => (
              <MovieList movieData={movie.data.results} loading={isLoading} />
            ))
          }
          <S.LoadingSpinnerContainer ref={ref}>
            {isFetching ? <LoadingSpinner /> : null}
          </S.LoadingSpinnerContainer>
        </>
      }
    </S.Container>
  );
}
