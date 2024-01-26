import FooterStyle from "./FooterStyles";

/**
 * FooterCopyright component represents the copyright section in the footer.
 * It displays the company name, the copyright symbol, the current year, and the terms of use.
 *
 * @param {string} value - The company name or value to be displayed in the copyright section.
 */
const FooterCopyright = ({ value }: { value: string }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyle.CopyrightContainer>
      {value} &copy; <span className="current-year">{currentYear}</span>
      <span>
        All rights reserved. Use of this site signifies your agreement to the
        terms of use.
      </span>
    </FooterStyle.CopyrightContainer>
  );
};

export default FooterCopyright;
