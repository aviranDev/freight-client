import { FooterSocialIcon } from "./FooterStyles";

interface IconProps {
  icon: {
    href: string;
    tag: React.ReactNode;
  };
}

export const Icon: React.FC<IconProps> = (props) => (
  <FooterSocialIcon href={props.icon.href} target="_blank">
    {props.icon.tag}
  </FooterSocialIcon>
);
