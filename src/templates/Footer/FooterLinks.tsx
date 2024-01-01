import { FooterLinkItems, FooterLinkTitle, FooterLink } from "./FooterStyles";

interface LinkProps {
  section?: {
    value?: {
      sub?: {
        path: string;
        to: string;
      }[];
    };
  };
}

export const Links: React.FC<LinkProps> = ({ section }) => (
  <FooterLinkItems>
    <FooterLinkTitle>TITLE</FooterLinkTitle>
    {section?.value?.sub?.map((val) => (
      <FooterLink key={val.path} to={val.to}>
        {val.path}
      </FooterLink>
    ))}
  </FooterLinkItems>
);
