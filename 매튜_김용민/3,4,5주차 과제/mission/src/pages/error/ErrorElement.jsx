import { useRouteError } from 'react-router-dom';

import * as S from './ErrorElement.style';

const ErrorElement = () => {
  const error = useRouteError();
  const errorMessage = error.error.message;
  return (
    <>
      <S.Container>
        <h1>에러가 발생했습니다.</h1>
        {errorMessage ? (
          <h3>{errorMessage}</h3>
        ) : (
          <h3>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h3>
        )}
        <S.MovePage to='/'>메인 페이지로 이동하려면 클릭해주세요</S.MovePage>
      </S.Container>
    </>
  );
};

export default ErrorElement;
