import styled from "styled-components";

export const InputContainer = styled.div`
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  margin-top: 32px;

  &:first-child {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5px 16px;
  height: 53px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 8px;
  caret-color: #d73035;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border: 1px solid #333;
  }
`;
