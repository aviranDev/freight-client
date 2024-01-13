import { Fragment } from "react";
import { ExternalLinks, ExternalLinksContainer } from "../FooterStyles";
import { externalLinks } from "../footerData";
import { ExternalLinksInfo } from "../footerData";
// Interface for the properties of each link

// Component to render individual external links
const FooterExternalLink: React.FC<ExternalLinksInfo> = ({
  src,
  href,
}: ExternalLinksInfo): JSX.Element => {
  return (
    <Fragment>
      <ExternalLinks href={href}>{src}</ExternalLinks>
    </Fragment>
  );
};

// Component to render the entire grid of external links
export const FooterExternalLinks = () => (
  <ExternalLinksContainer>
    {/* Map through the externalLinks map and render each section */}
    {Array.from(externalLinks).map(([key, value]) => (
      <FooterExternalLink key={key} {...value} />
    ))}
  </ExternalLinksContainer>
);

export default FooterExternalLinks;
