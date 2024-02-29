import { useState, useEffect } from "react";
import NavbarStyle from "./NavbarStyles";
import NavigationOne from "./NavigationOne";
import NavigationTwo from "./NavigationTwo";
import { generalNavigation, roleNavigation } from "./navData";
import { ComponentUsingTimer } from "../../globalState/LiveTimeProvider";

type UserRole = "admin" | "superAdmin" | "employee";

interface User {
  role: UserRole;
  isLoggedIn: boolean;
}

// Use a union type to allow User or null
type NullableUser = User | null;

const user: NullableUser = {
  role: "employee",
  isLoggedIn: false,
};

// const user: NullableUser = null;

export const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  console.log("test");

  useEffect(() => {
    console.log("Navbar useEffect called"); // Log when useEffect is called

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
      </NavbarStyle.InnerContainer>
    </NavbarStyle.Wrapper>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Navbar;
