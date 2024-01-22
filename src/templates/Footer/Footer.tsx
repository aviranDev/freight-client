import {
  FooterWrapper,
  CenteredBorder,
  FooterSection3,
  FooterSection2,
  FooterSection1,
} from "./FooterStyles";
import { InternalLinks } from "./InternalLinks";
import { FooterExternalLinks } from "./ExternalLinks";
import CopyRight from "./CopyRight";
import LinksWeb from "./Links";
import { links, linksData } from "./footerData";

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <FooterSection1>
      <InternalLinks payload={linksData} />
    </FooterSection1>

    <CenteredBorder />

    <FooterSection2>
      {/* works */}
      <FooterExternalLinks />
    </FooterSection2>

    <FooterSection3>
      <LinksWeb links={links} />
      <CopyRight value="Freight" />
    </FooterSection3>
  </FooterWrapper>
);

export default Footer;
