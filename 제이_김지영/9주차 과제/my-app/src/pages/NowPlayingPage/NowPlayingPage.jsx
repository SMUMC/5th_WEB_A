import { FetchData } from "../../Hooks/FetchData";
import MovieList from "../../Components/MovieList/MovieList";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { useState, useEffect } from "react";

export default function NowPlaying() {
  const [page, setPage] = useState(1); // for infinite scroll
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(2);

  const { isData, isLoading } = FetchData("now_playing", page);
  const { prevData, isPrevLoading } = FetchData("now_playing", prevPage);
  const { nextData, isNextLoading } = FetchData("now_playing", nextPage);

  useEffect(() => {
    // 컴포넌트가 마운트된 상태에서 활성화

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      setPage((prev) => {
        //console.log("check"); // 불러와지긴 하는지

        //맨 위로 스크롤할 때 끝까지 올리지 않아도 scrolledToTop이 참이 되도록
        //맨 아래로 스크롤할 때 끝까지 내리지 않아도 scrolledToBottom이 true가 되도록
        // const scrolledToTop = document.documentElement.scrollTop <= 10;
        const scrolledToBottom =
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 5;
        //console.log("scrolledToTop:", scrolledToTop);
        //console.log("scrolledToBottom:", scrolledToBottom);

        // if (scrolledToTop && prev > 1) {
        //   // 페이지가 1보다 작거나 같은 경우에는 이벤트 처리하지 않음
        //   // 스크롤이 맨 위에 도달하면 페이지를 감소시켜 새로운 데이터를 가져옴
        //   setPrevPage(prev - 1);
        //   return prev - 1;
        // } else if (scrolledToBottom) {
        if (scrolledToBottom) {
          // 스크롤이 맨 아래에 도달하면 페이지를 증가시켜 새로운 데이터를 가져옴
          setNextPage(prev + 1);
          return prev + 1;
        }

        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 등록

    // useEffect 내에서 return 블록에 작성된 함수는 컴포넌트가 언마운트(unmount)될 때 실행
    // 컴포넌트가 언마운트되는 경우 1.페이지 이탈 또는 라우팅 변경 2.컴포넌트 라이프사이클 메서드 3.조건부 렌더링
    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트가 언마운트되면 이벤트 리스너 제거
      // 이벤트 리스너가 메모리 누수를 일으키지 않고 효과적으로 동작하게 됨
    };
  }, []); // 첫 렌더링 시 한 번만 호출

  return (
    <>
      <div>
        <h1 style={{ fontSize: "100px", color: "white" }}>
          Prev Page: {prevPage}
        </h1>
        {prevData ? <MovieList films={prevData} /> : ""}
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 style={{ fontSize: "100px", color: "white" }}>
            Now Here: {page}
          </h1>
          <MovieList films={isData} />
        </div>
      )}

      {isNextLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 style={{ fontSize: "100px", color: "white" }}>
            Next Page: {nextPage}
          </h1>
          <MovieList films={nextData} />
        </div>
      )}
    </>
  );
}
