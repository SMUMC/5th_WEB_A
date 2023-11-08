import React from "react";
import * as S from "./Search.styled";
import { Input } from "../../components/Input";
import PreviewMovieView from "../../components/PreviewMovie/index";

export const Search = ({ onChange, searchResultList }) => {
    return (
        <S.Container>
            <S.Title>📽️ Find your movies !</S.Title>
            <S.SearchContainer>
                <Input onChange={(e) => onChange(e.target.value)} />
                <S.SearchButton />
            </S.SearchContainer>
            {searchResultList.length > 0 &&
                <S.SearchResultContainer>
                    {searchResultList.map((item) => (
                        <PreviewMovieView key={item.id} movieData={item} />
                    ))}
                </S.SearchResultContainer>
            }
        </S.Container>
    );
};
