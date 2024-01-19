import {
  FooterWrapper,
  CenteredBorder,
  FooterSectionThree,
  FooterSectionTwo,
  FooterSectionOne,
} from "./FooterStyles";
import { FooterInternalLinks } from "./InternalLinks";
import { FooterExternalLinks } from "./ExternalLinks";
import CopyRight from "./CopyRight";
import LinksWeb from "./Links";
import { links } from "./footerData";
import { payload } from "./footerData";

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <FooterSectionOne>
      <FooterInternalLinks payload={payload} />
    </FooterSectionOne>

    <CenteredBorder />

    <FooterSectionTwo>
      <FooterExternalLinks />
    </FooterSectionTwo>

    <FooterSectionThree>
      <LinksWeb links={links} />
      <CopyRight value="Freight" />
    </FooterSectionThree>
  </FooterWrapper>
);

export default Footer;
