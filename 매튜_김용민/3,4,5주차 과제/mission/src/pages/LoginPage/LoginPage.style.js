import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;
  margin: auto;

  h1 {
    text-align: center;
    padding: 50px;
    color: white;
    font-size: 3rem;
  }

  p {
    color: red;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  padding: 30px;
  margin: 10px 0px;
  width: 800px;
  border: 1px solid purple;
  border-radius: 50px;
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 30px;
  margin: 10px 0px;
  width: 800px;
  border-radius: 50px;
  font-size: 2rem;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
export { Wrapper, Form, Input, Button };
