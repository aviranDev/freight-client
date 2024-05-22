import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  ErrorMessage,
  InputContainer,
  InputRow,
  IconWrapper,
  StyledInput,
  TogglePasswordIcon,
  InputProps,
} from "../styles/input";

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const isPasswordType = props.type === "password";

  const handleMouseDown = () => {
    setIsButtonPressed(true);
    setIsPasswordVisible(true);
  };

  const handleMouseUp = () => {
    setIsButtonPressed(false);
    setIsPasswordVisible(false);
  };

  return (
    <InputContainer>
      <InputRow>
        <IconWrapper>{Icon && <Icon size={20} />}</IconWrapper>
        <StyledInput
          type={
            isPasswordType
              ? isPasswordVisible
                ? "text"
                : "password"
              : props.type
          }
          id={props.name}
          name={props.name}
          defaultValue={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        {isPasswordType && (
          <TogglePasswordIcon
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {isButtonPressed ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </TogglePasswordIcon>
        )}
      </InputRow>
      <ErrorMessage hasError={!!props.errorMessage}>
        {props.errorMessage}
      </ErrorMessage>
    </InputContainer>
  );
};

export default Input;
