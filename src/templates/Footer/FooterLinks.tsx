import { FooterLinkItems, FooterLinkTitle, FooterLink } from "./FooterStyles";

interface LinkProps {
  // 'section' prop represents the data for rendering the links
  section?: {
    value?: {
      sub?: {
        // 'path' is the text content of the link
        path: string;
        // 'to' is the target URL of the link
        to: string;
      }[];
    };
  };
}

/**
 * Links Component
 * Renders a set of links based on the provided 'section' prop.
 * Each link is represented by a 'path' and a corresponding 'to' URL.
 *
 * @param {LinkProps} props - The properties passed to the component.
 * @returns {JSX.Element} - The rendered Links component.
 */
export const Links: React.FC<LinkProps> = ({
  section,
}: LinkProps): JSX.Element => {
  // Destructure the 'sub' array from the 'section.value' object, defaulting to an empty array
  const { sub } = section?.value || {};

  return (
    <FooterLinkItems>
      {/* Render the link title */}
      <FooterLinkTitle>TITLE</FooterLinkTitle>

      {/* Conditionally render links only if 'sub' array exists */}
      {sub &&
        sub.map((val) => (
          <FooterLink key={val.path} to={val.to}>
            {/* Display the text content of the link */}
            {val.path}
          </FooterLink>
        ))}
    </FooterLinkItems>
  );
};
