import { icons, copyright } from "./footerData";
import { FooterIcons } from "./FooterIcon";

/* LAYOUT */
import {
  IconsContainer,
  FooterContainer,
  FooterWrapper,
  CenteredBorder,
  FooterCopyright,
} from "./FooterStyles";

/* SECTIONS */
import { FooterInternalLinks } from "./InternalLinks";
import { FooterExternalLinks } from "./ExternalLinks";

const Footer = (): JSX.Element => (
  <FooterContainer>
    <FooterWrapper>{<FooterInternalLinks />}</FooterWrapper>

    <CenteredBorder />

    <FooterExternalLinks />
    <IconsContainer>
      {/*    {Array.from(icons).map(([key, value]) => (
        <FooterIcons key={key} icon={value} />
      ))} */}
    </IconsContainer>
    <FooterCopyright>
      {copyright("copyright", "Freight")} &copy; {new Date().getFullYear()}
    </FooterCopyright>
  </FooterContainer>
);

export default Footer;
