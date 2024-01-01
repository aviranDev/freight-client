import { useState } from "react";
import { NavbarContainer } from "./NavbarStyles";

export const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <h1>HEADER</h1>
    </NavbarContainer>
  );
};

export default Navbar;
