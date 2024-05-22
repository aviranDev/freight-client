import FooterStyle from "./FooterStyles"; // Importing styles for the footer
import FooterCopyright from "./CopyRight"; // Importing component for copyright information
import FooterExternalLinks from "./ExternalLinks"; // Importing component for external links
import FooterInternalLinks from "./InternalLinks"; // Importing component for internal links
import FooterWebInfo from "./WebInfo"; // Importing component for web information
import { footerLinks, internalLinks, externalLinks } from "./footerData"; // Importing data for footer links

function Footer(): JSX.Element {
  return (
    <FooterStyle.Wrapper>
      {/* Section 1: Internal Links */}
      <FooterStyle.Section1>
        <FooterInternalLinks payload={internalLinks} />{" "}
        {/* Passing internal links data to InternalLinks component */}
      </FooterStyle.Section1>

      {/* Divider between sections */}
      <FooterStyle.CenteredBorder />

      {/* Section 2: External Links */}
      <FooterStyle.Section2>
        <FooterExternalLinks payload={externalLinks} />{" "}
        {/* Passing external links data to ExternalLinks component */}
      </FooterStyle.Section2>

      {/* Section 3: Web Information and Copyright */}
      <FooterStyle.Section3>
        <FooterWebInfo links={footerLinks} />{" "}
        {/* Passing footer links data to WebInfo component */}
        <FooterCopyright value={"Freight"} /> {/* Copyright information */}
      </FooterStyle.Section3>
    </FooterStyle.Wrapper>
  );
}

export default Footer;
