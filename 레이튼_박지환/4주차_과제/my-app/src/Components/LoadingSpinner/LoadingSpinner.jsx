import { Background, Text, Loader } from "./LoadingSpinner.style";

export default function LoadingSpinner() {
  return (
    <Background>
      <Text>Wait a second!</Text>
      <Loader />
    </Background>
  );
}
