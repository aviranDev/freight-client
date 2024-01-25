import FooterStyle from "./FooterStyles";
import { ReactNode } from "react";

interface ExternalLinksInfo {
  payload: Map<string, { image?: ReactNode; href?: string }>;
}

export const FooterExternalLinks: React.FC<ExternalLinksInfo> = ({
  payload,
}) => (
  <>
    {Array.from(payload).map(([key, value]) => (
      <FooterStyle.ExternalLinkImg key={key} target="_blank" href={value.href}>
        {value.image}
      </FooterStyle.ExternalLinkImg>
    ))}
  </>
);

export default FooterExternalLinks;
