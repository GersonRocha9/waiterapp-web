import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 384px;
  border-radius: 8px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;

  .primary {
    padding: 12px 24px;
    border-radius: 48px;
    background-color: #d73035;
    color: #fff;
    border: 0;
    margin-top: 40px;
    font-weight: 600;
    font-size: 16px;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
