import * as S from "../LoadingSpinner/LoadingSpinner.style";

export default function LoadingSpinner() {
  return (
    <S.Background>
      <p>Wait a second!</p>
      <S.Loader />
    </S.Background>
  );
}
