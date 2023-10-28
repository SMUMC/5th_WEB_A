import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/MovieDescription/MovieDescription.styled";

export default function MovieDesc({ film }) {
  const { title, overview } = film;
  return (
    <S.DescriptionContainer>
      <h1>{title}</h1>
      <p>{overview}</p>
    </S.DescriptionContainer>
  );
}
