import React from "react";
import * as S from "./Search.styled";

export const Search = () => {
    return (
        <S.Container>
            <S.Title>📽️ Find your movies !</S.Title>
            <S.SearchContainer>
                <S.SearchLayout />
                <S.SearchButton
                    onClick={() => {
                        console.log("검색");
                    }}
                />
            </S.SearchContainer>
        </S.Container>
    );
};
