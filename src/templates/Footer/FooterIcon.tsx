import { ReactNode } from "react";
import { FooterSocialIcon } from "./FooterStyles";

interface IconProps {
  icon: {
    href: string;
    tag: ReactNode;
  };
}

/**
 * Icon Component
 * Renders a social icon with a clickable link.
 *
 * @component
 * @param {IconProps} props - The properties passed to the component.
 * @param {object} props.icon - The icon object.
 * @param {string} props.icon.href - The URL of the link.
 * @param {ReactNode} props.icon.tag - The React node representing the icon.
 * @returns {JSX.Element} - The rendered Icon component.
 */
export const FooterIcons: React.FC<IconProps> = ({
  icon,
}: IconProps): JSX.Element => (
  <FooterSocialIcon href={icon.href} target="_blank">
    {icon.tag}
  </FooterSocialIcon>
);
