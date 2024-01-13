import { Fragment } from "react";
import { RightContainer, Container, NavbarLinkInternal } from "./NavbarStyles";
import { UserNavType } from "./navData";

interface RightNavigationProps {
  user?: { role: string; isLoggedIn: boolean } | null; // Updated type to allow null
  guestNav: Map<string, string>;
  userNav: UserNavType;
}

const RightNavigation: React.FC<RightNavigationProps> = (props) => {
  return (
    <RightContainer>
      {props.user ? <Container></Container> : <Container></Container>}
    </RightContainer>
  );
};

export default RightNavigation;
