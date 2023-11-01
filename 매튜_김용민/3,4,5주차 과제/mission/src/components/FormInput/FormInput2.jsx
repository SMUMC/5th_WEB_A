import { useState } from 'react';
import * as S from './FormInput.style';

const FormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input {...inputProps} onChange={onChange} required />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Wrapper>
  );
};

export default FormInput;
