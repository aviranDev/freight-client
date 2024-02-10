import { SidebarContainer, SidebarInnerContainer } from "./sidebarStyles";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { userNav, guestNav, UserNavType } from "./sideBarData";
import { Fragment } from "react";

interface RightNavigationProps2 {
  user?: { role: string; isLoggedIn: boolean } | null; // Updated type to allow null
  guestNav?: Map<string, string>;
  userNav?: UserNavType;
}

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

// Example with null
// const user: NullableUser = null;

const Sidebar: React.FC<RightNavigationProps2> = () => {
  return (
    <SidebarContainer>
      <SidebarInnerContainer>
        <ul>
          <li>
            <Link to="/">
              <FaUser size={35} />
            </Link>
            {user ? (
              <Fragment>
                {Array.from(userNav()).map(([key, value]) => (
                  <Fragment>
                    {value.role === (user as { role: string }).role && (
                      <Link to={value.path}>{key}</Link>
                    )}
                  </Fragment>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/">guest</Link>
              </Fragment>
            )}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </SidebarInnerContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
