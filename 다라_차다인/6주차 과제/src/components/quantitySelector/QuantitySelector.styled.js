import styled from "styled-components";
import { AiOutlineUp, AiOutlineDown} from "react-icons/ai";
import theme from "../../theme";

export const Container = styled.div`
    ${theme.styles.flexCenterColumn};

    p {
        font-size: 15px;
        color: ${theme.color.priceText};
    }
`;

export const CountUp = styled(AiOutlineUp)`
    font-size: 16px;
    color: ${theme.color.countText};
`;

export const CountDown = styled(AiOutlineDown)`
    font-size: 16px;
    color: ${theme.color.countText};
`;