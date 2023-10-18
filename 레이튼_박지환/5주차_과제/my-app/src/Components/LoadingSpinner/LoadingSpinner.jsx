import * as S from "./LoadingSpinner.style";
import Spinner from "../../Assets/spinner.gif";

export default function LoadingSpinner() {
  return (
    <S.Background>
      <S.Text>Wait a second!</S.Text>
      <img src={Spinner} alt="" />
      {/* <Loader /> */}
    </S.Background>
  );
}
