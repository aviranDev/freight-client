import { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import { UserNavType, userNav } from "./navData";
import { Link } from "react-router-dom";

type UserRole = "admin" | "superAdmin" | "employee";

interface User {
  role: UserRole;
  isLoggedIn: boolean;
}

// Use a union type to allow User or null
type NullableUser = User | null;

// Example with null
// const user: NullableUser = null;

const user: NullableUser = {
  role: "employee",
  isLoggedIn: false,
};

interface RightNavigationProps {
  user?: { role: string; isLoggedIn: boolean } | null; // Updated type to allow null
  guestNav: Map<string, string>;
  userNav: UserNavType;
}

const NavigationTwo: React.FC<RightNavigationProps> = (props) => {
  return (
    <>
      {props.user && (
        <>
          {user ? (
            <Fragment>
              {Array.from(userNav).map(([key, value]) => (
                <Fragment key={key}>
                  {value.role === (user as { role: string }).role && (
                    <NavbarStyle.NavLinkInternal to={value.path}>
                      {key}
                    </NavbarStyle.NavLinkInternal>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/">guest</Link>
            </Fragment>
          )}
        </>
      )}
    </>
  );
};

export default NavigationTwo;
