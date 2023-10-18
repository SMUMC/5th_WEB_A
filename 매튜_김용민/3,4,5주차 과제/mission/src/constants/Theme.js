// 반응형 디자인 pixel convert
const pixelToRem = (size) => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

// 자주 사용하는 색을 상수로 관리하자.
const colors = {
  black: '#000000',
  grey: '#999999',
  green: '#3cb46e',
  blue: '#000080',
  white: '#ffffff',
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.
const theme = {
  fontSizes,
  colors,
  common,
};

// Dark 모드 light 모드 구현시 아래와 같이하면 더 쉽게 되겠죠?
export const lightTheme = {
  bgColor: '#fff',
  textColor: '#222',
  accentColor: '#12cbef',
};

export const darkTheme = {
  bgColor: '#282c35',
  textColor: '#fff',
  accentColor: '#ffe246',
};

export const lightDarkMode = {
  lightTheme,
  darkTheme,
};

export default theme;

// 이런식으로 반응형도 딱 잡고가는게 좋아보입니다. 폰트사이즈나,
// const windowSize = {
//   small: 'screen and (max-width: '600px')',
//   base: 'screen and (max-width: '768px')',
//   large: 'screen and (max-width: '1024px')',
// };

// const fontSize = {
//   xs: '0.5rem',
//   sm: '0.75rem',
//   base: '1rem',
//   md: '1.25rem',
//   lg: '1.5rem',
// };

// const lightversion = {
//   background: '#fff',
//   fontPrimary: 'black',
//   fontSecondary: 'gray',
//   primary: '#00a0ff',
//   secondary: '#ddd',
//   hover: '#00a0ff50',
// };

// const repo = {
//   open: 'red',
//   close: 'blue',
// };

// const theme = {
//   windowSize,
//   repo,
//   fontSize,
//   lightversion,
// };

// export default theme;
