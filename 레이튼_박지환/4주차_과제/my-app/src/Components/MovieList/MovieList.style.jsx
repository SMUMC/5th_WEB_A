import styled from "styled-components";

const MovieListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  place-items: center;
  padding: 12px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;

export { MovieListStyle };
// function MovieListStyle() {
//   return <MovieList></MovieList>;
// }

// :root {
//   --main-color: rgb(27, 20, 130);
//   --box-color: rgb(113, 106, 207);
//   --font-color: white;
// }

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   width: 100vw;
//   height: 100vh;
//   background-color: var(--main-color);
// }

// .movie_list {
//   /* grid 속성을 많이 써보자, 전체 스타일링 할 때는 최상위 요소에 주는게 좋다 더 직관적 */
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 1rem;
//   place-items: center;
//   padding: 12px;
// }
