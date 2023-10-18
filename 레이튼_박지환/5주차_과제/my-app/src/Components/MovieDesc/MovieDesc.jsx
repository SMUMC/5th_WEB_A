import * as S from "./MovieDesc.style";

function MovieDesc({ film }) {
  return (
    <S.DescriptContainer>
      <S.DescriptTitle>{film.title}</S.DescriptTitle>
      <S.DescriptPara>{film.overview}</S.DescriptPara>
    </S.DescriptContainer>
  );
}

export default MovieDesc;
