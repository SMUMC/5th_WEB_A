import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 30vh; /* 화면 높이 30%를 차지하도록 설정 */
`;

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  width: 256px;
  height: 256px;
  border: 40px solid gold;
  border-radius: 50%;
`;

export { Container, LoadingSpinner };
