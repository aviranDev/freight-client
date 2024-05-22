import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

// Define types for the Button props
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info"; // Add more variants as needed
  width?: string;
};

// Define styles for the Button component using styled-components
export const StyledButton = styled.button<ButtonProps>`
  /* Common styles */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: ${(props) =>
    props.width ? props.width : "auto"}; // Width is configurable
  transition: all 0.2s ease-in-out;

  /* Variant styles */
  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: #007bff;
    color: #fff;
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: #6c757d;
    color: #fff;
  `}

  ${(props) =>
    props.variant === "success" &&
    `
    background-color: #28a745;
    color: #fff;
  `}

  ${(props) =>
    props.variant === "danger" &&
    `
    background-color: #dc3545;
    color: #fff;
  `}

  ${(props) =>
    props.variant === "warning" &&
    `
    background-color: #ffc107;
    color: #212529;
  `}

  ${(props) =>
    props.variant === "info" &&
    `
    background-color: #17a2b8;
    color: #fff;
  `}



  &:active {
    transform: scale(0.95);
  }
`;

export default StyledButton;
