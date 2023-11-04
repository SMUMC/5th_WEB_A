import React from "react";
import * as S from "./styles/Footer.styled";

const Footer = () => {
    return (
        <S.Container>
            <p>github__</p>
            <S.LinkLayout 
                to="https://github.com/daindaind" 
                target="_blank"
                rel="noopener noreferrer"
            >
                https://github.com/daindaind
            </S.LinkLayout>
        </S.Container>
    );
}

export default Footer;