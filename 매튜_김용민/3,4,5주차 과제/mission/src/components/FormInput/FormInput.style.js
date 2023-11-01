import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80vw;
`;

const Input = styled.input`
  padding: 30px;
  margin: 10px 0px;
  width: 100%;
  border: 1px solid purple;
  border-radius: 10px;
  font-size: 2rem;

  &:invalid ~ ErrorMessage {
    display: block;
  }
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: white;
`;

const ErrorMessage = styled.span`
  font-size: 2rem;
  padding: 3px;
  color: red;
  display: none;
`;

export { Wrapper, Label, Input, ErrorMessage };
