import * as S from "../SignUpBox/SignUpBox.styled";

export default function SignUpInput({
  placeholder,
  value,
  onChange,
  type,
  errorMessage,
}) {
  return (
    <S.Container>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
      <div>
        <p>{errorMessage}</p>
      </div>
    </S.Container>
  );
}
