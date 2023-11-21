import React from "react";
import PreviewMovieView from "../../components/PreviewMovie/index";
import { useLoaderData, useNavigation } from "react-router-dom";
import * as S from "./MovieList.styled";
import { SkeletonElement } from "../../uis/Skeleton";

export const MovieList = ({ movieData, loading }) => {
    return (
        <S.MovieListContainer>
            {loading ?
                Array(20).fill(null).map((_, index) => <SkeletonElement key={index} />)
                :
                movieData.map((item) => (
                    <PreviewMovieView key={item.id} movieData={item} />
                ))
            }
        </S.MovieListContainer>
    );
};
