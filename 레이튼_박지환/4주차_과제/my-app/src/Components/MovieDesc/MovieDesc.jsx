import {
  DescriptContainer,
  DescriptTitle,
  DescriptPara,
} from "./MovieDesc.style";

function MovieDesc({ title, description }) {
  return (
    <DescriptContainer>
      <DescriptTitle>{title}</DescriptTitle>
      <DescriptPara>{description}</DescriptPara>
    </DescriptContainer>
  );
}

export default MovieDesc;
