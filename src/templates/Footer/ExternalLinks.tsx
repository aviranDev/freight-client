import { Fragment } from "react";
import { ExternalLink } from "./FooterStyles";
import { externalLinks } from "./footerData";
import { ExternalLinksInfo } from "./footerData";

// Component to render the entire grid of external links
export const FooterExternalLinks: React.FC<ExternalLinksInfo> = () => (
  <Fragment>
    {Array.from(externalLinks).map(([key, value]) => (
      <ExternalLink key={key} target="_blank" href={value.href}>
        {value.src}
      </ExternalLink>
    ))}
  </Fragment>
);

export default FooterExternalLinks;
