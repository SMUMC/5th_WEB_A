import { useRouteError } from "react-router-dom";
import * as S from "./ErrorPage.styled";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <S.Container>
      <S.Title>Oops!</S.Title>
      <S.Content>Sorry, an unexpected error has occurred.</S.Content>
      <S.Content>
        <i>{error.statusText || error.message}</i>
      </S.Content>
    </S.Container>
  );
}