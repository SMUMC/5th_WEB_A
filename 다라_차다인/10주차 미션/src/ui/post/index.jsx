import TextArea from "antd/es/input/TextArea";
import * as S from "./Post.styled";
import { Button, Upload, message } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../redux/slices/postSlice";
import { UploadOutlined } from '@ant-design/icons';
import { addNewPost } from "../../api/addNewPost";

export const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState("");
    const postId = useSelector((state) => state.post.posts).length;
    const userId = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    const selectFile = useRef("");

    const onUpload = (file) => {
        // console.log(file);
    }

    const onPost = async () => {
        if (title !== "" || content !== "") {
            const res = await addNewPost(content, userId);
            if (res) {
                dispatch(post({ id: postId, title: title, content: content, img: img }));
                alert("게시가 완료되었습니다!");
                setTitle("");
                setContent("");
            }
        } else {
            alert("제목 및 내용을 작성해주세요");
        }
    }

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange: onUpload,
    }

    return (
        <S.Container>
            <TextArea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해주세요"
                autoSize={{ minRows: 1, maxRows: 1 }}
            />
            <TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력해주세요"
                autoSize={{ minRows: 3, maxRows: 10 }}
            />
            <S.ButtonContainer>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>이미지 업로드</Button>
                    <input type="file" ref={selectFile} />
                </Upload>
                <Button onClick={onPost}>게시하기</Button>
            </S.ButtonContainer>
        </S.Container>
    );
}