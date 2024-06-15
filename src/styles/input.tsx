import styled from "styled-components";
import { IconType } from "react-icons";

export interface InputProps {
  type: string;
  name: string;
  value?: string;
  label?: string;
  validText?: string;
  icon?: IconType;
  placeholder?: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ErrorMessageProps {
  $hasError: boolean;
}

export const ErrorMessage = styled.p<ErrorMessageProps>`
  color: #800000;
  margin: 0;
  font-size: 0.9rem;
  height: 1.2rem; /* Reserve space for the error message */
  visibility: ${({ $hasError }) => ($hasError ? "visible" : "hidden")};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconWrapper = styled.div`
  display: flex;
  background-color: #ccc;
  padding: 10.48px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-right: none;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  font-size: 18px;
  background-color: #eee;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #000;
  border-left: none;
  /* border: none; */

  &::placeholder {
    text-transform: capitalize;
  }
`;

export const TogglePasswordIcon = styled.div`
  position: absolute;
  right: 5px;
  background-color: #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
`;
