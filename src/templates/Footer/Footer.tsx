import FooterStyle from "./FooterStyles";
import FooterCopyright from "./CopyRight";
import FooterExternalLinks from "./ExternalLinks";
import FooterInternalLinks from "./InternalLinks";
import FooterWebInfo from "./WebInfo";
import { links, linksData } from "./footerData";
import { externalLinks } from "./footerData";

/**
 * Footer component displays the footer section of the website.
 *
 * @returns {JSX.Element} Footer component.
 */
function Footer(): JSX.Element {
  return (
    <FooterStyle.Wrapper>
      {/* Section 1: Internal Links */}
      <FooterStyle.Section1>
        <FooterInternalLinks payload={linksData} />
      </FooterStyle.Section1>

      {/* Divider between sections */}
      <FooterStyle.CenteredBorder />

      {/* Section 2: External Links */}
      <FooterStyle.Section2>
        <FooterExternalLinks payload={externalLinks} />
      </FooterStyle.Section2>

      {/* Section 3: Web Information and Copyright */}
      <FooterStyle.Section3>
        <FooterWebInfo links={links} />
        <FooterCopyright value="Freight" />
      </FooterStyle.Section3>
    </FooterStyle.Wrapper>
  );
}

export default Footer;
