import React, { memo, Fragment, useMemo } from "react"; // Importing necessary modules from React
import FooterStyle from "./FooterStyles"; // Importing footer styles
import {
  validateString,
  ValidationErrorMessage,
} from "../../utils/validateString"; // Importing validation utilities

interface FooterCopyrightProps {
  value: string; // Prop type for the copyright value
}

const FooterCopyright: React.FC<FooterCopyrightProps> = memo(({ value }) => {
  // Check if the provided value is valid
  if (!validateString(value)) {
    // Display error message if the value is invalid
    return (
      <ValidationErrorMessage
        message={`Invalid value provided for FooterCopyright: ${value}`}
      />
    );
  }

  // Calculate the current year using useMemo to avoid unnecessary re-renders
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentYear: number = useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterStyle.CopyrightContainer>
      {/* Display copyright value and current year */}
      {value} &copy; <span className="current-year">{currentYear}</span>
      {/* Additional copyright information */}
      <Fragment>
        All rights reserved. Use of this site signifies your agreement to the
        terms of use.
      </Fragment>
    </FooterStyle.CopyrightContainer>
  );
});

export default FooterCopyright;
