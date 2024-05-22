import { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import {
  validateString,
  ValidationErrorMessage,
} from "../../utils/validateString";

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
  const renderNavLink = (
    key: string,
    Icon: React.FC | string,
    link: string,
    title: string,
  ) => {
    if (!validateString(link) || !validateString(title)) {
      return (
        <NavbarStyle.ErrorSection key={key}>
          <ValidationErrorMessage message={`Invalid link or title: ${link}`} />
        </NavbarStyle.ErrorSection>
      );
    }

    if (typeof Icon === "string" && !Icon.trim()) {
      return (
        <NavbarStyle.ErrorSection key={key}>
          <ValidationErrorMessage message={`Invalid Icon: ${Icon}`} />
        </NavbarStyle.ErrorSection>
      );
    }

    return (
      <>
        <NavbarStyle.NavLinkInternal
          fSize="2.5rem"
          key={key}
          to={link}
          hoverTitle={title}
        >
          {typeof Icon === "string" ? Icon : <Icon />}
        </NavbarStyle.NavLinkInternal>
      </>
    );
  };

  return (
    <>
      {user?.isLoggedIn === true && (
        <Fragment>
          {Array.from(navigation).map(
            ([key, { name: Icon, link, title, roles }]) => (
              <Fragment key={key}>
                {roles.includes(user.role) && (
                  <Fragment key={key}>
                    {renderNavLink(key, Icon, link, title)}
                  </Fragment>
                )}
              </Fragment>
            ),
          )}
        </Fragment>
      )}
    </>
  );
};

export default NavigationTwo;
