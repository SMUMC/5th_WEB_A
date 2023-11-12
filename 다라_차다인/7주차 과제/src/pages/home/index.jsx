import React, { useEffect, useState } from "react";
import * as S from "./Home.styled";
import { Search } from "../../uis/Search";
import { Banner } from "../../components/Banner";
import { searchMovie } from "../../api/searchMovie";
import useDebounce from "../../util/useDecounce";
import { useLoading } from "../../util/useLoading";

export const Home = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchResultList, setSearchResultList] = useState([]);
    const [isLoading, handleSearchMovie] = useLoading(searchMovie);
    const debouncedQuery = useDebounce(searchWord, 250);

    const searchMovieProps = {
        query: searchWord,
        type: "movie",
        includeAdult: "false",
        language: "ko-KR",
        page: "1",
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await handleSearchMovie(searchMovieProps);
            setSearchResultList(result);
        }
        if (debouncedQuery) {
            fetchData();
        }
    }, [debouncedQuery]);

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
