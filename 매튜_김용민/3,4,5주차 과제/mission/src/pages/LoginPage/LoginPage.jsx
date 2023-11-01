import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './LoginPage.style';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string('이름은 문자열이어야 합니다.')
      .required('반드시 이름을 입력해주세요!'),
    email: yup
      .string('이메일은 문자열이어야 합니다.')
      .email('이메일 양식을 맞춰주세요')
      .required('반드시 이메일을 입력해주세요!'),
    // integer -> 소수 방지
    age: yup
      .number()
      .typeError('나이는 숫자를 입력해주세요!')
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable('나이는 숫자')
      .positive('나이는 음수가 될 수 없습니다')
      .integer('나이는 소수가 될 수 없습니다. 정수로 입력해주세요')
      .min(19, '19살 이상만 가입할 수 있습니다.')
      .required('숫자로 된 나이를 입력해주세요'),
    password: yup
      .string()
      .min(4, '비밀번호는 최소 4자리 이상이어야 합니다.')
      .max(12, '비밀번호는 최대 12자리까지 가능합니다.')
      .required('반드시 비밀번호를 입력해주세요!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/,
        '영어 + 숫자 + 특수문자를 조합하여 작성해주세요!'
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        '작성한 비밀번호와 동일하지 않습니다. 다시 한 번 확인해주세요!'
      )
      .required('작성하신 비밀번호와 동일한지 확인을 해주세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('회원가입에 성공했습니다.');
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입 페이지</h1>
        <S.Input type='text' placeholder='이름' {...register('name')} />
        <p>{errors.name?.message}</p>
        <S.Input type='text' placeholder='이메일' {...register('email')} />
        <p>{errors.email?.message}</p>
        <S.Input type='text' placeholder='나이' {...register('age')} />
        <p>{errors.age?.message}</p>
        <S.Input
          type='password'
          placeholder='비밀번호'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <S.Input
          type='password'
          placeholder='비밀번호 확인'
          {...register('confirmPassword')}
        />
        <p>{errors.confirmPassword?.message}</p>
        <S.Button type='submit'>제출하기</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default LoginPage;
