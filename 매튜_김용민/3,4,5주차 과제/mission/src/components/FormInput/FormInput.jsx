import { useState } from 'react';
import * as S from './FormInput.style';

const FormInput = (props) => {
  const { id, nlabel, placeholder, type, name, value, onChange } = props;

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        className='large'
        placeholder={placeholder}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </S.Wrapper>
  );
};

export default FormInput;
