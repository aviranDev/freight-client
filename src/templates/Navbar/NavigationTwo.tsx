import { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import { Link } from "react-router-dom";

interface RightNavigationProps {
  user?: { role: string; isLoggedIn: boolean } | null; // Updated type to allow null
  navigation: Map<
    string,
    {
      name: React.FC | string;
      link: string;
      title: string;
      roles: string[];
    }
  >;
}

const NavigationTwo: React.FC<RightNavigationProps> = ({
  user,
  navigation,
}) => {
  return (
    <>
      {user && (
        <>
          {user ? (
            <Fragment>
              {Array.from(navigation).map(([key, value]) => (
                <Fragment key={key}>
                  {value.roles.includes(user.role) && (
                    <NavbarStyle.NavLinkInternal to={value.title}>
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
