import styled from "styled-components";

export const Container = styled.div`
  display: flex; // ���� �迭
  margin: 0px;
  background-color: #747880;
  border-radius: 8px;
  padding: 80px;

  & > div {
    margin: 0 25px; /* �¿� 25px ���� ���� */
    flex: 1; // �ڽ� ��Ұ� Ȯ��ǵ��� flex �Ӽ� �߰�
  }

  img {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
  }

  h1 {
    font-size: 40px;
    color: white;
  }

  h3 {
    font-size: 25px;
    color: white;
  }

  div {
    color: white;
  }
`;
