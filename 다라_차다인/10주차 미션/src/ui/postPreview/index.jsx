import * as S from "./PostPreview.styled";
import { Button, Card, Avatar, Tooltip } from 'antd';
import { HeartFilled, HeartOutlined, EllipsisOutlined, ShareAltOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newFollowing, unFollowing } from "../../redux/slices/userSlice";
import { getPostComments } from "../../api/getPostComments";
import { Comment } from "../comment";
import TextArea from "antd/es/input/TextArea";
import { addNewComment } from "../../api/addNewComment";
import { deletePost } from "../../redux/slices/postSlice";

const { Meta } = Card;

export const PostPreview = ({ id, title, content, img, username, writterId }) => {
    const dispatch = useDispatch();
    const [follow, setFollow] = useState(false);
    const [like, setLike] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const isLogin = useSelector((state) => state.user.isLogin);
    const userId = useSelector((state) => state.user.id);
    const notMyPost = <S.MenuBtn onClick={() => { alert("신고되었습니다.") }}>신고하기</S.MenuBtn>;
    const myPost =
        <>
            <S.MenuBtn onClick={() => {
                dispatch(deletePost(id));
                alert("게시물이 삭제되었습니다.")
            }}>삭제하기</S.MenuBtn>
            <S.MenuBtn>수정하기</S.MenuBtn>
        </>
        ;

    const following = () => {
        setFollow(!follow);
        if (!follow) {
            dispatch(newFollowing({ id: writterId, name: "user", group: "", follow: true }));
        } else {
            dispatch(unFollowing(writterId));
        }
    };
    const onComment = async () => {
        setOpenComment(!openComment);
        if (!isLogin) {
            alert("로그인 후 이용해주세요");
        } else if (openComment) {
            const res = await getPostComments(id);
            setComments(res.comments);
        }
    };
    const onNewComment = async () => {
        const res = await addNewComment({ content: newComment, postId: id, userId: userId });
        if (res) {
            alert("댓글이 작성되었습니다.");
            setNewComment("");
            const updatedComments = await getPostComments(id);
            setComments(updatedComments.comments);
        }
    };

    return (
        <S.Container>
            <S.ButtonCard
                hoverable
                actions={[
                    <ShareAltOutlined key="share" />,
                    like ? <HeartFilled key="like" onClick={() => setLike(!like)} />
                        : <HeartOutlined key="like" onClick={
                            () => isLogin ? setLike(!like)
                                : alert("로그인 후 이용해주세요")
                        } />,
                    <CommentOutlined key="comment" onClick={() => onComment()} />,
                    <Tooltip placement="top" title={username ? myPost : notMyPost}>
                        <EllipsisOutlined key="ellipsis" />
                    </Tooltip>,
                ]}
                cover={img !== null && <S.Img alt="example" src={img} />}
            >
                <S.ButtonContainer>
                    <S.UserContainer>
                        <Avatar size={35} icon={<UserOutlined />} />
                        <h3>{username ? username : "user"}</h3>
                    </S.UserContainer>
                    {isLogin && <Button onClick={following}>{follow ? "언팔로우" : "팔로우"}</Button>}
                </S.ButtonContainer>
                <Meta title={title} description={content} />
            </S.ButtonCard>
            {openComment && comments.length > 0 &&
                <S.CommentsContainer>
                    <TextArea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="내용을 입력해주세요"
                        autoSize={{ minRows: 3, maxRows: 10 }}
                    />
                    <Button onClick={onNewComment}>게시하기</Button>
                    <p>{comments.length}개의 댓글</p>
                    {comments.map((item) =>
                        <Comment name={item.user.username} content={item.body} />
                    )}
                </S.CommentsContainer>
            }
        </S.Container>
    );
}