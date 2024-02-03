import { useState, useEffect } from "react";
import NavbarStyle from "./NavbarStyles";
import NavigationOne from "./NavigationOne";
import NavigationTwo from "./NavigationTwo";
import { generalNav, guestNav, userNav } from "./navData";

const user = {
  role: "admin",
  isLoggedIn: true,
};

export const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < prevScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <NavbarStyle.Wrapper $isvisible={isVisible}>
      <NavbarStyle.InnerContainer>
        <NavbarStyle.NavContainer order={0}>
          <NavigationOne generalNav={generalNav} />
        </NavbarStyle.NavContainer>

        <NavbarStyle.NavContainer order={1}>
          <NavigationTwo user={user} guestNav={guestNav} userNav={userNav} />
        </NavbarStyle.NavContainer>
      </NavbarStyle.InnerContainer>
    </NavbarStyle.Wrapper>
  );
};

export default Navbar;
