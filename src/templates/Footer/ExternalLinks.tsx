import FooterStyle from "./FooterStyles";
import { ReactNode, Fragment } from "react";
import {
  validateString,
  ValidationErrorMessage,
} from "../../utils/validateString";

/**
 * FooterExternalLinks component displays external links in the footer.
 * It takes a payload containing a Map of link keys to their respective information.
 *
 * @param {Object} props - The component props.
 * @param {Map<string, { image?: ReactNode; href?: string }>} props.payload - Map of link keys to their information.
 * @returns {JSX.Element} FooterExternalLinks component.
 */
function FooterExternalLinks({
  payload,
}: {
  payload: Map<string, { image?: ReactNode; href?: string }>;
}): JSX.Element {
  // Validate the structure of the Map
  if (!(payload instanceof Map)) {
    return (
      // Display an error message if the structure is invalid
      <ValidationErrorMessage
        message={`Invalid structure for 'links'. Expected a Map, received: ${JSON.stringify(
          payload,
        )}`}
      />
    );
  }

  return (
    <>
      {Array.from(payload).map(([key, value]) => (
        <Fragment key={key}>
          {validateString(value.href) ? (
            // Valid href: render ExternalLinkImg
            <FooterStyle.ExternalLinkImg target="_blank" href={value.href}>
              {value.image}
            </FooterStyle.ExternalLinkImg>
          ) : (
            // Invalid href: display an error message
            <ValidationErrorMessage
              message={`Invalid href value provided for link '${key}': ${value.href}`}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}

export default FooterExternalLinks;
