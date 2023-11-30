import { Card } from "antd";
import * as S from "./ProfilePreview.styled"
import { logout } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserFollow } from "../../components/userFollow";

const { Meta } = Card;

export const ProfilePreview = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.username);
    const followList = useSelector((state) => state.user.followList);
    const followerListNum = useSelector((state) => state.user.followerList).length;
    const postsNum = useSelector((state) => state.post.posts).length;
    const followNum = followList.filter(user => user.follow).length;
    const onLogout = () => {
        dispatch(logout());
        alert("로그아웃 되었습니다!");
    };

    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <UserFollow title="게시물" count={postsNum} />,
                <UserFollow title="팔로잉" count={followNum} />,
                <UserFollow title="팔로우" count={followerListNum} />,
            ]}
        >
            <Meta
                title={userName}
                description="환영합니다!"
            />
            <S.LoginButton
                onClick={onLogout}
            >로그아웃</S.LoginButton>
        </Card>
    );
}