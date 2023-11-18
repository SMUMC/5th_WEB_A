import React, { useState } from "react";
import * as S from "./Home.styled";
import { Search } from "../../uis/Search";
import { Banner } from "../../components/Banner";
import useSearchMovie from "../../api/useSearchMovie";

export const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const searchMovieProps = {
        query: searchWord,
        type: "movie",
        includeAdult: "false",
        language: "ko-KR",
        page: "1",
    }
    const { loading: isLoading, error, data: searchResultList } = useSearchMovie(searchMovieProps);

    return (
        <S.Container>
            <Banner />
            <S.SearchContainer>
                <Search
                    onChange={setSearchWord}
                    searchResultList={searchResultList}
                    loading={isLoading}
                />
            </S.SearchContainer>
        </S.Container>
    );
};
