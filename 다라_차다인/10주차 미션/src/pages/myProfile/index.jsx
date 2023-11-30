import * as S from "./MyProfile.styled";
import { FollowList } from "../../components/followList";
import { useSelector } from "react-redux";
import { Login } from "../../ui/login";
import { ProfilePreview } from "../../ui/profilePreivew";

export const MyProfile = () => {
    const followList = useSelector((state) => state.user.followList);
    const followerList = useSelector((state) => state.user.followerList);
    // const isLogin = useSelector((state) => state.user.isLogin);

    return (
        <S.Container>
            <S.HomeSider>
                <ProfilePreview />
            </S.HomeSider>
            <S.VerticalContainer>
                <S.FollowContainer>
                    <h1>팔로잉 목록</h1>
                    {followList.map((item, index) =>
                        <FollowList
                            id={item.id}
                            name={item.name}
                            group={item.group}
                            follow={item.follow}
                        />
                    )}
                </S.FollowContainer>
                <S.FollowContainer>
                    <h1>팔로우 목록</h1>
                    {followerList.map((item, index) =>
                        <FollowList
                            id={item.id}
                            name={item.name}
                            group={item.group}
                            follow={item.follow}
                        />
                    )}
                </S.FollowContainer>
            </S.VerticalContainer>
        </S.Container>
    );
}