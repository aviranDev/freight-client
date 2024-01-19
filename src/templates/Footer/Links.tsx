import { LinksContainer } from "./FooterStyles";
import { FooterLinks } from "./FooterStyles";

interface LinksWebProps {
  links: Map<string, { name: string; link: string }>;
}

const LinksWeb: React.FC<LinksWebProps> = ({ links }) => (
  <LinksContainer>
    {Array.from(links).map(([key, value]) => (
      <FooterLinks key={key} to={value.link}>
        {value.name}
      </FooterLinks>
    ))}
  </LinksContainer>
);

export default LinksWeb;
