import FooterStyle from "./FooterStyles";

interface LinksWebProps {
  links: Map<string, { name: string; link: string }>;
}

export const FooterWebInfo: React.FC<LinksWebProps> = ({ links }) => (
  <>
    {Array.from(links).map(([key, value]) => (
      <FooterStyle.LinksWebInfo key={key} to={value.link}>
        {value.name}
      </FooterStyle.LinksWebInfo>
    ))}
  </>
);

export default FooterWebInfo;
