import Spinner from "./loading_spinner.gif";
import * as S from "./Loading.style";

function LoadingSpinner() {
  return (
    <S.SpinnerContainer>
      <S.SpinnerImage src={Spinner} alt="Loading..." />
    </S.SpinnerContainer>
  );
}

export default LoadingSpinner;
