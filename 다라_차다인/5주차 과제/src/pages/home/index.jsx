import React from "react";
import * as S from "./Home.styled";
import { Search } from "../../uis/Search";
import { Banner } from "../../components/banner";

export const Home = () => {
    return (
        <S.Container>
            <Banner />
            <S.SearchContainer>
                <Search />
            </S.SearchContainer>
        </S.Container>
    );
};
