import * as S from "/Users/mars/Documents/umc/5th_WEB_A/레이튼_박지환/5주차_과제/my-app/src/Components/ErrorBox/ErrorBox.style.jsx";

export function ErrorBox() {
  return (
    <S.ErrorBox>
      <h1>에러가 발생했습니다.</h1>
      <p>주소가 잘못됐거나 더 이상 제공되지 않는 페이지입니다.</p>
      <a href="/">메인 페이지로 이동하려면 클릭해주세요</a>
    </S.ErrorBox>
  );
}
