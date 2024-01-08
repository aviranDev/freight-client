import { useState } from "react";
import { NavbarContainer, NavbarInnerContainer } from "./NavbarStyles";
import LeftNavigation from "./leftNavigation";
import RightNavigation from "./RightNavigation";
import { generalNav, guestNav } from "./navData";
const user = null;

export const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftNavigation generalNav={generalNav} />
        <RightNavigation user={user} guestNav={guestNav} />
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
