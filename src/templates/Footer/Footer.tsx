import { Rights, IconsContainer } from "./FooterStyles";
import { icons, copyright } from "./footerData";
import { FooterIcons } from "./FooterIcon";

/* LAYOUT */
import { FooterContainer, FooterWrapper } from "./FooterStyles";

/* SECTIONS */
import { FooterInternalLinks } from "./sections/InternalLinks";
import { FooterExternalLinks } from "./sections/ExternalLinks";

const Footer = (): JSX.Element => (
  <FooterContainer>
    <FooterWrapper>
      <FooterInternalLinks />
      <FooterExternalLinks />
    </FooterWrapper>

    <IconsContainer>
      {Array.from(icons).map(([key, value]) => (
        <FooterIcons key={key} icon={value} />
      ))}
    </IconsContainer>
    <Rights>
      {copyright("copyright", "Freight")} &copy; {new Date().getFullYear()}
    </Rights>
  </FooterContainer>
);

export default Footer;
