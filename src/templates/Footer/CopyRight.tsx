import FooterStyle from "./FooterStyles";
import {
  validateString,
  ValidationErrorMessage,
} from "../../utils/validateString";

/**
 * FooterCopyright component displays copyright information.
 *
 * @component
 * @example
 * // Usage:
 * <FooterCopyright value="Your Company Name" />
 *
 * @param {Object} props - The component props.
 * @param {string} props.value - The company name or value to be displayed in the copyright section.
 * @returns {JSX.Element} FooterCopyright component.
 */
function FooterCopyright({ value }: { value: string }): JSX.Element {
  // Validate the input value
  if (!validateString(value)) {
    return (
      // Display an error message if validation fails
      <ValidationErrorMessage
        message={`Invalid value provided for FooterCopyright: ${value}`}
      />
    );
  }

  // Get the current year dynamically.
  const currentYear: number = new Date().getFullYear();

  return (
    // Render the copyright container with the valid value and current year
    <FooterStyle.CopyrightContainer>
      {value} &copy; <span className="current-year">{currentYear}</span>
      <span>
        All rights reserved. Use of this site signifies your agreement to the
        terms of use.
      </span>
    </FooterStyle.CopyrightContainer>
  );
}

export default FooterCopyright;
