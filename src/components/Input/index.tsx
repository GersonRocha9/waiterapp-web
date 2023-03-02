import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { InputContainer, Label, Input as TextInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, ...rest }: InputProps) => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInput
        type={rest.type === "password" ? "password" : "text"}
        placeholder={placeholder}
        onChange={
          rest.type === "password"
            ? onChange
            : (event) => setValue(event.target.value)
        }
        {...rest}
      />
    </InputContainer>
  );
};
