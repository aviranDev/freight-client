// utils/stringUtils.ts
import React from "react";

/**
 * Validates if a value is a non-empty string.
 *
 * @param {unknown} value - The value to be validated.
 * @returns {boolean} True if the value is a non-empty string, false otherwise.
 */
const validateString = (value: unknown): value is string => {
  if (typeof value !== "string" || !value.trim()) {
    console.error(
      `Invalid string: ${
        typeof value !== "string"
          ? "Value is not a string"
          : "String is empty after trimming"
      }`,
      value,
    );
    return false;
  }

  return true;
};

/**
 * Display an error message in red.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The error message to be displayed.
 * @returns {JSX.Element} ValidationErrorMessage component.
 */
const ValidationErrorMessage: React.FC<{ message: string }> = ({
  message,
}: {
  message: string;
}): JSX.Element => <div style={{ color: "red" }}>{message}</div>;

// eslint-disable-next-line react-refresh/only-export-components
export { validateString, ValidationErrorMessage };
