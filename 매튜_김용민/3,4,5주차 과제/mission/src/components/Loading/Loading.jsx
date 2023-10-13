import * as S from './Loading.style';

const Loading = () => {
  return (
    <S.Container>
      <p>영화 리스트를 가지고 오는 중 입니다.</p>
      <p>잠시만 기다려 주세요!</p>
      <S.LoadingSpinner />
    </S.Container>
  );
};

export default Loading;
