import FooterStyle from "./FooterStyles";
import { FooterInternalLinks } from "./InternalLinks";
import { FooterExternalLinks } from "./ExternalLinks";
import { FooterCopyright } from "./CopyRight";
import { FooterWebInfo } from "./WebInfo";
import { links, linksData } from "./footerData";
import { externalLinks } from "./footerData";

// Footer component definition
const Footer = (): JSX.Element => (
  <FooterStyle.Wrapper>
    <FooterStyle.Section1>
      <FooterInternalLinks payload={linksData} />
    </FooterStyle.Section1>

    <FooterStyle.CenteredBorder />

    <FooterStyle.Section2>
      <FooterExternalLinks payload={externalLinks} />
    </FooterStyle.Section2>

    <FooterStyle.Section3>
      <FooterWebInfo links={links} />
      <FooterCopyright value="Freight" />
    </FooterStyle.Section3>
  </FooterStyle.Wrapper>
);

export default Footer;
