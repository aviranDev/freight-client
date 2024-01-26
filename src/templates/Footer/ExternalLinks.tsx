import FooterStyle from "./FooterStyles";
import { ReactNode } from "react";

interface ExternalLinksInfo {
  payload: Map<string, { image?: ReactNode; href?: string }>;
}

/**
 * FooterExternalLinks component displays external links in the footer.
 * It takes a payload containing a Map of link keys to their respective information.
 *
 * @param {ExternalLinksInfo} payload - Map of link keys to their information.
 */
const FooterExternalLinks: React.FC<ExternalLinksInfo> = ({
  payload,
}: ExternalLinksInfo) => (
  <>
    {Array.from(payload).map(([key, value]) => (
      <FooterStyle.ExternalLinkImg key={key} target="_blank" href={value.href}>
        {value.image}
      </FooterStyle.ExternalLinkImg>
    ))}
  </>
);

export default FooterExternalLinks;
