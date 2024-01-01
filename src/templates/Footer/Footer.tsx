import {
  FooterContainer,
  FooterWrapper,
  FooterGrid,
  Rights,
} from "./FooterStyles";
import { payload, icons, addData } from "./footerData";
import { Icon } from "./FooterIcon";
import { Links } from "./FooterLinks";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <FooterGrid>
        {Array.from(payload).map(([key, value]) => (
          <Links key={key} section={{ value }} />
        ))}
      </FooterGrid>
      {Array.from(icons).map(([key, value]) => (
        <Icon key={key} icon={value} />
      ))}
      <Rights>
        {addData("rights", "RIGHTS")} &copy; {new Date().getFullYear()}
      </Rights>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
