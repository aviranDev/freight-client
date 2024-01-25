import FooterStyle from "./FooterStyles";

export const FooterCopyright = ({ value }: { value: string }) => (
  <FooterStyle.CopyrightContainer>
    {value} &copy;{" "}
    <span className="current-year">{new Date().getFullYear()}</span>
    <span>
      All rights reserved. Use of this site signifies your agreement to the
      terms of use.
    </span>
  </FooterStyle.CopyrightContainer>
);

export default FooterCopyright;
