import {
  FooterContainer,
  FooterWrapper,
  FooterGrid,
  Rights,
} from "./FooterStyles";
import { payload, icons, copyright } from "./footerData";
import { Icon } from "./FooterIcon";
import { Links } from "./FooterLinks";

/**
 * Footer Component
 * Renders the footer section of the website, including links, icons, and rights information.
 * Data for links and icons is imported, and the current year is dynamically displayed in the rights section.
 *
 * @returns {JSX.Element} - The rendered Footer component.
 */
const Footer = (): JSX.Element => (
  // Container for the entire footer
  <FooterContainer>
    {/* Wrapper for content within the footer */}
    <FooterWrapper>
      {/* Grid for organizing links */}
      <FooterGrid>
        {/* Map over payload data and render Links component for each section */}
        {Array.from(payload).map(([key, value]) => (
          <Links key={key} section={{ value }} />
        ))}
      </FooterGrid>

      {/* Map over icons data and render Icon component for each icon */}
      {Array.from(icons).map(([key, value]) => (
        <Icon key={key} icon={value} />
      ))}

      {/* Rights section with dynamic year and additional data from addData function */}
      <Rights>
        {copyright("copyright", "Freight")} &copy; {new Date().getFullYear()}
      </Rights>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
