import React, { useEffect, useState } from "react";
import * as S from "./Home.styled";
import { Search } from "../../uis/Search";
import { Banner } from "../../components/Banner";
import { searchMovie } from "../../api/searchMovie";
import useDebounce from "../../util/useDecounce";

export const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchResultList, setSearchResultList] = useState([]);
    const debouncedQuery = useDebounce(searchWord, 250);

    const searchMovieProps = {
        query: searchWord,
        type: "movie",
        includeAdult: "false",
        language: "ko-KR",
        page: "1",
    }

    useEffect(() => {
        if (debouncedQuery) {
            searchMovie(searchMovieProps).then((res) => {
                setSearchResultList(res);
            });
        }
    }, [debouncedQuery]);

    return (
        <S.Container>
            <Banner />
            <S.SearchContainer>
                <Search onChange={setSearchWord} searchResultList={searchResultList} />
            </S.SearchContainer>
        </S.Container>
    );
};
