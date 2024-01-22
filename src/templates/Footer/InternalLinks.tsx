import { FC } from "react";
import {
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLinkItem,
} from "./FooterStyles";

interface InternalLinksProps {
  payload: Map<string, { links: { path: string; to: string }[] }>;
}

export const InternalLinks: FC<InternalLinksProps> = ({ payload }) => (
  <>
    {Array.from(payload).map(([key, value]) => (
      <FooterLinkContainer key={key}>
        <FooterLinkTitle>{key}</FooterLinkTitle>
        {value.links.map((val) => (
          <FooterLinkItem key={val.path} to={val.to}>
            {val.path}
          </FooterLinkItem>
        ))}
      </FooterLinkContainer>
    ))}
  </>
);

export default InternalLinks;
