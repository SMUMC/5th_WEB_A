import { Background, Text } from "./LoadingSpinner.style";
import Spinner from "../../Assets/spinner.gif";

export default function LoadingSpinner() {
  return (
    <Background>
      <Text>Wait a second!</Text>
      <img src={Spinner} alt="" />
      {/* <Loader /> */}
    </Background>
  );
}
