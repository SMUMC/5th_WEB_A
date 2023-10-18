import * as S from "./ErrorBox.style";
import { NavLink } from "react-router-dom";
export function ErrorBox() {
  return (
    <S.ErrorBox>
      <S.ErrorTitle>에러가 발생했습니다.</S.ErrorTitle>
      <S.ErrorLine>
        주소가 잘못됐거나 더 이상 제공되지 않는 페이지입니다.
      </S.ErrorLine>
      <NavLink
        to="/"
        style={{
          fontWeight: "bold",
          color: "yellow",
          textDecoration: "none",
        }}
      >
        메인 페이지로 이동하려면 클릭해주세요
      </NavLink>
    </S.ErrorBox>
  );
}
