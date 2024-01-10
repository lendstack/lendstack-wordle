import { createContext } from "react";

export interface InputField {
  value: string;
  error: string;
}

type DispatchInput = React.Dispatch<React.SetStateAction<InputField>>;

interface InputFieldContextType {
  setInputField: DispatchInput;
  input: InputField;
}

export const InputContext = createContext<InputFieldContextType>(
  {} as InputFieldContextType
);
