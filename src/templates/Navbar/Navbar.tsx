import { useState, useEffect, useMemo } from "react";
import NavbarStyle from "./NavbarStyles";
import NavigationOne from "./NavigationOne";
import NavigationTwo from "./NavigationTwo";
import { generalNavigation, roleNavigation } from "./navData";
import { ComponentUsingTimer } from "../../context/LiveTimeProvider";
import Collapse from "./Collapse";

type UserRole = "admin" | "superAdmin" | "employee";

interface User {
  role: UserRole;
  isLoggedIn: boolean;
}

// Use a union type to allow User or null
type NullableUser = User | null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* const user: NullableUser = {
  role: "employee",
  isLoggedIn: true,
}; */

const user: NullableUser = null;

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
      console.log("Navbar useEffect cleanup"); // Log when useEffect cleanup is performed

      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <NavbarStyle.Wrapper $isvisible={isVisible}>
      <NavbarStyle.InnerContainer>
        <NavbarStyle.NavContainer order={0}>
          <NavigationOne
            navigation={generalNavigation}
            date={<ComponentUsingTimer />}
          />
        </NavbarStyle.NavContainer>

        <NavbarStyle.NavContainer order={1}>
          <NavigationTwo user={user} navigation={roleNavigation} />
        </NavbarStyle.NavContainer>
        <NavbarStyle.OpenLinksButton
          onClick={() => setCollapse(!collapse)}
          collapse={collapse}
        >
          {collapse ? <>&#10005;</> : <> &#8801;</>}
        </NavbarStyle.OpenLinksButton>
      </NavbarStyle.InnerContainer>
      {collapse && (
        <Collapse
          user={user}
          roleNavigation={roleNavigation}
          generalNavigation={generalNavigation}
        />
      )}
    </NavbarStyle.Wrapper>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Navbar;
