import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn}
    gap: 30px;
`;

export const MovieInfoContainer = styled.div`
    display: flex;
`;

export const MovieBackground = styled.img`
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    opacity: 0.1;
`;

export const MovieDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 1000px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 100px;
`;

export const Poster = styled.img`
    display: flex;
    width: 350px;
    height: 500px;
`;

export const MovieInfomationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    h3 {
        font-size: 30px;
        color: white;
    }
    h5 {
        font-size: 20px;
        color: white;
    }
    p {
        display: flex;
        font-size: 16px;
        color: white;
        line-height: 30px;
    }
`;

export const CreditsContainer = styled.div`
    width: 75%;
`;
