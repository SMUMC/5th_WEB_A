import * as S from "./Home.styled";
import { Login } from "../../ui/login";
import { PostPreview } from "../../ui/postPreview";
import { ProfilePreview } from "../../ui/profilePreivew";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../ui/post";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../api/getAllPosts";
import { useInfiniteQuery } from "react-query";
import { throttle } from "lodash";
import { useInView } from "react-intersection-observer";
import { LoadingSpinner } from "../../components/loadingSpinner";

export const Home = () => {
    const [ref, inview] = useInView();
    const isLogin = useSelector((state) => state.user.isLogin);
    const myPosts = useSelector((state) => state.post.posts);

    const {
        data,
        isLoading,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(
        ['posts'],
        ({ pageParam = 0 }) => getAllPosts({ limit: 10, skip: pageParam }),
        {
            getNextPageParam: (lastPage, allPages) => {
                const currentPage = lastPage ? lastPage.length : 0;
                return currentPage < 15 ? currentPage + 10 * allPages?.length : undefined; // 예를 들어 15페이지까지만 요청
            },
            staleTime: 60000,
            cacheTime: 360000,
        },
    );

    const throttleFetchNextPage = throttle(fetchNextPage, 1500);
    useEffect(() => {
        if (inview && hasNextPage && !isFetching && !isLoading) {
            throttleFetchNextPage();
        }
    }, [isLoading, inview]);

    return (
        <S.Container>
            <S.HomeSider>
                {!isLogin ? <Login /> : <ProfilePreview />}
            </S.HomeSider>
            <S.HomeContent>
                {isLogin && <Post />}
                {myPosts?.length > 0 &&
                    [...myPosts].reverse().map((item) =>
                        <PostPreview id={item.id} title={item.title} content={item.content} img={null} username={"kminchelle"} />
                    )}
                {data &&
                    data.pages?.map((page, i) =>
                        page.map((post) => (
                            <PostPreview
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.body}
                                img={null}
                                writterId={post.userId}
                            />
                        ))
                    )}
                <S.LoadingSpinnerContainer ref={ref}>
                    {isFetching ? <LoadingSpinner /> : null}
                </S.LoadingSpinnerContainer>
            </S.HomeContent>
        </S.Container>
    );
}