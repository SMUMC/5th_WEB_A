import * as S from "../MovieDescription/MovieDescription.styled";

export default function MovieDesc({ film }) {
  const { title, overview } = film;

  return (
    <S.DescriptionContainer>
      <h1>{title}</h1>
      <p>{overview}</p>
    </S.DescriptionContainer>
  );
}
