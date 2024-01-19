import { Fragment } from "react";
import {
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLinkItem,
} from "./FooterStyles";

export const FooterInternalLinks: React.FC<{
  payload: Map<
    string,
    {
      links: {
        path: string;
        to: string;
      }[];
    }
  >;
}> = ({ payload }) => (
  <Fragment>
    {Array.from(payload).map(([key, value]) => (
      <FooterLinkContainer key={key}>
        <FooterLinkTitle>{key}</FooterLinkTitle>
        {value.links &&
          value.links.map((val) => (
            <FooterLinkItem key={val.path} to={val.to}>
              {val.path}
            </FooterLinkItem>
          ))}
      </FooterLinkContainer>
    ))}
  </Fragment>
);

export default FooterInternalLinks;
