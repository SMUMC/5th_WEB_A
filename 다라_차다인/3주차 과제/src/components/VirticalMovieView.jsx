import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VirticalMovieView = ({poster, title, star, detail}) => {
    const [mouse, setMouse] = useState(false);

    return (
        <Contianer
            onMouseEnter={() => {setMouse(true)}}
            onMouseLeave={() => {setMouse(false)}}
        >
            <Poster src={poster}></Poster>
            <DescriptionContainer>
                <Title>{title}</Title>
                <Star>{star}</Star>
            </DescriptionContainer>

            <DetailContents
                style={{visibility : mouse ? "visible" : "hidden"}}
            >
                <Title>{title}</Title>
                <DetailText>{detail.slice(0, 300)}...</DetailText>
            </DetailContents>
        </Contianer>
    );
}

const Contianer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 200px;
`;

const Poster = styled.img`
    display: flex;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 10px;
    background-color: #373B69;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Title = styled.p`
    display: flex;
    font-size: 13px;
    color: white;
`;

const Star = styled(Title)``;

const DetailText = styled(Title)``;

const DetailContents = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 160px;
    height: 90%;
    padding: 20px;
    background-color: black;
    opacity: 0.8;
    border-radius: 5px;
`;

export default VirticalMovieView;