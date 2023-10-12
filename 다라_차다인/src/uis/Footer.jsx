import React from "react";
import * as S from "./styles/Footer.styled";

const Footer = () => {
    return (
        <S.Container>
            <S.Contents>github__</S.Contents>
            <S.Contents onClick={() => 
                window.open("https://github.com/daindaind")
            }>
                 https://github.com/daindaind
            </S.Contents>
        </S.Container>
    );
}

export default Footer;