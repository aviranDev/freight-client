import {
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLinkItem,
  FooterGrid,
} from "../FooterStyles";
import { payload } from "../footerData";

interface LinkProps {
  // 'section' prop represents the data for rendering the links
  section?: {
    key?: string;
    value?: {
      links?: {
        // 'path' is the text content of the link
        path: string;
        // 'to' is the target URL of the link
        to: string;
      }[];
    };
  };
}

const FooterInternalLink: React.FC<LinkProps> = ({
  section,
}: LinkProps): JSX.Element => {
  const { links } = section?.value || {};

  return (
    <FooterLinkContainer>
      <FooterLinkTitle>{section?.key}</FooterLinkTitle>
      {links &&
        links.map((val) => (
          <FooterLinkItem key={val.path} to={val.to}>
            {val.path}
          </FooterLinkItem>
        ))}
    </FooterLinkContainer>
  );
};

export const FooterInternalLinks = () => (
  <FooterGrid>
    {Array.from(payload).map(([key, value]) => (
      <FooterInternalLink key={key} section={{ key, value }} />
    ))}
  </FooterGrid>
);

export default FooterInternalLinks;
