import { useState } from "react";
import NavbarStyle, {
  NavbarContainer,
  NavbarInnerContainer,
} from "./NavbarStyles";
import NavigationOne from "./NavigationOne";
import NavigationTwo from "./NavigationTwo";
import { generalNav, guestNav, userNav } from "./navData";
const user = {
  role: "admin",
  isLoggedIn: true,
};

export const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <NavbarStyle.Wrapper>
      <NavbarStyle.InnerContainer>
        <NavbarStyle.LeftContainer>
          <NavigationOne generalNav={generalNav} />
        </NavbarStyle.LeftContainer>

        <NavbarStyle.RightContainer>
          <NavigationTwo user={user} guestNav={guestNav} userNav={userNav()} />
        </NavbarStyle.RightContainer>
      </NavbarStyle.InnerContainer>
    </NavbarStyle.Wrapper>
  );
};

export default Navbar;
