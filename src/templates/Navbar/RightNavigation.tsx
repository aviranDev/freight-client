import { Fragment } from "react";
import {
  RightContainer,
  Container,
  Button,
  DropdownMenuContainer,
  NavbarLinkInternal,
} from "./NavbarStyles";

interface RightNavigationProps {
  user?: unknown; // Adjust the type based on the actual type of user data
  guestNav: Map<string, string>;
}

const RightNavigation: React.FC<RightNavigationProps> = (props) => {
  return (
    <RightContainer>
      {props.user ? (
        <Container>
          {/*        {Array.from(props?.userNav(favorites)).map(([key, value]) => (
            <Fragment key={key}>
              {value.roles.find((role) =>
                props?.user?.roles?.includes(role),
              ) && (
                <NavbarLinkInternal to={value.path}>{key}</NavbarLinkInternal>
              )}
            </Fragment>
          ))} */}
          <DropdownMenuContainer>
            {/*   <Button onClick={handleDropDown}>
              <Greeting />
              {dropdown && <UserDropdown />}
            </Button> */}
          </DropdownMenuContainer>
        </Container>
      ) : (
        <Container>
          {Array.from(props.guestNav).map(([key, value]) => (
            <Fragment key={key}>
              <NavbarLinkInternal to={value}>{key}</NavbarLinkInternal>
            </Fragment>
          ))}
        </Container>
      )}
    </RightContainer>
  );
};

export default RightNavigation;
