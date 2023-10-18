// 1. ThemeProvider 연결
// 2.안해줘도 무방
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  height: 20%;

  background-color: black;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  ${({ theme }) => theme.common.flexCenterColumn}

  gap: 5px;

  h1 {
    /* color: white; */
    color: ${({ theme }) => theme.colors.white};
    font-size: 4rem;
  }

  h3 {
    margin-top: 20px;
    margin-right: 250px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
  }

  h4 {
    margin-left: 250px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
  }
`;

export { Wrapper };
