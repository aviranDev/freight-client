import React, { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import renderNavLink from "../../utils/renderNavLink";

export type GeneralNavType = Map<
  string,
  {
    name: React.FC | string;
    link: string;
    title: string;
  }
>;

interface NavigationCollapse {
  user?: { role: string; isLoggedIn: boolean } | null;
  roleNavigation: GeneralNavType;
  generalNavigation: GeneralNavType;
}

// eslint-disable-next-line react-refresh/only-export-components
const Collapse: React.FC<NavigationCollapse> = ({
  user,
  roleNavigation,
  generalNavigation,
}) => {
  return (
    <NavbarStyle.NavbarCollapseContainer>
      {user?.isLoggedIn ? (
        <Fragment>
          <h1>Collpase user logged</h1>
        </Fragment>
      ) : (
        <Fragment>
          {Array.from(generalNavigation).map(
            ([key, { name: Icon, link, title }]) => (
              <Fragment key={key}>
                {renderNavLink(key, Icon, link, title)}
              </Fragment>
            ),
          )}
        </Fragment>
      )}
    </NavbarStyle.NavbarCollapseContainer>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Collapse);
