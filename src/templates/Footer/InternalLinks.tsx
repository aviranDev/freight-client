import FooterStyle from "./FooterStyles";

interface InternalLinksProps {
  payload: Map<string, { links: { path: string; to: string }[] }>;
}

export const FooterInternalLinks: React.FC<InternalLinksProps> = ({
  payload,
}) => (
  <>
    {Array.from(payload).map(([key, value]) => (
      <FooterStyle.InternalLinkContainer key={key}>
        <FooterStyle.InternalLinkTitle>{key}</FooterStyle.InternalLinkTitle>
        {value.links.map((val) => (
          <FooterStyle.InternalLinkItem key={val.path} to={val.to}>
            {val.path}
          </FooterStyle.InternalLinkItem>
        ))}
      </FooterStyle.InternalLinkContainer>
    ))}
  </>
);

export default FooterInternalLinks;
