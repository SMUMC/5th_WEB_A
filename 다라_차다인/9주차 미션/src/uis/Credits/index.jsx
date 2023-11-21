import * as S from "./Credits.styled";
import { Profile } from "../../components/Profile";

export const Credits = ({ creditList }) => {
    return (
        <S.Container>
            <h3>출연진 및 제작진</h3>
            <S.ProfileContainer>
                {creditList?.map((item) =>
                    <Profile key={item.key} profileData={item} />
                )}
            </S.ProfileContainer>
        </S.Container>
    );
}