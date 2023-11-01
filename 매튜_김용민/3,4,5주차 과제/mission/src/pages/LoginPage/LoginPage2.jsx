// import { useRef, useState } from 'react';
// import { FormInput } from '../../components';
// import * as S from './LoginPage.style';

// const LoginPage = () => {
//   const [values, setValues] = useState({
//     username: '',
//     email: '',
//     birthday: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: 'username',
//       type: 'text',
//       placeholder: 'Username',
//       errorMessage:
//         "Username should be 3-16 characters and shouldn't include any special character!",
//       label: 'Username',
//       pattern: '^[A-Za-z0-9]{3,16}$',
//       required: true,
//     },
//     {
//       id: 2,
//       name: 'email',
//       type: 'email',
//       placeholder: 'Email',
//       errorMessage: 'It should be a vaild email address!',
//       label: 'Email',
//       required: true,
//     },
//     {
//       id: 3,
//       name: 'birthday',
//       type: 'date',
//       placeholder: 'Birthday',
//       label: 'Birthday',
//       required: true,
//     },
//     {
//       id: 4,
//       name: 'password',
//       type: 'password',
//       errorMessage:
//         'Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character',
//       placeholder: 'Password',
//       label: 'Password',
//       required: true,
//     },
//     {
//       id: 5,
//       name: 'confirmPassword',
//       type: 'password',
//       placeholder: 'Password',
//       errorMessage: 'Passwords do not match',
//       label: 'Confirm Password',
//       required: true,
//     },
//   ];
//   console.log('re-rendered');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const data = new FormData(e.target);
//     // console.log(Object.fromEntries(data.entries()));
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   console.log(values);

//   return (
//     <S.Wrapper>
//       <h1>회원가입 페이지</h1>
//       <form onSubmit={handleSubmit}>
//         {inputs.map((input) => {
//           return (
//             <FormInput
//               key={input.id}
//               {...input}
//               value={values[input.name]}
//               onChange={onChange}
//             />
//           );
//         })}
//         <button>제출하기</button>
//       </form>
//     </S.Wrapper>
//   );
// };

// export default LoginPage;
