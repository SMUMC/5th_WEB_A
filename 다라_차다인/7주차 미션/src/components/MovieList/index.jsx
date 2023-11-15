import React from "react";
import PreviewMovieView from "../../components/PreviewMovie/index";
import { useLoaderData, useNavigation } from "react-router-dom";
import * as S from "./MovieList.styled";
import { SkeletonElement } from "../../uis/Skeleton";

export const MovieList = () => {
    const datam = useLoaderData();
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";

    return (
        <S.MovieListContainer>
            {isPageLoading ?
                Array(20).fill(null).map(() => <SkeletonElement />)
                :
                datam.map((item) => (
                    <PreviewMovieView key={item.id} movieData={item} />
                ))
            }

        </S.MovieListContainer>
    );
};
