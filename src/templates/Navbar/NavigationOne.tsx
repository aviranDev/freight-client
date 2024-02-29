import React, { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import {
  validateString,
  ValidationErrorMessage,
} from "../../utils/validateString";

export type GeneralNavType = Map<
  string,
  {
    name: React.FC | string;
    link: string;
    title: string;
  }
>;

interface NavigationOneProps {
  navigation: GeneralNavType;
  date: React.ReactNode;
}

const NavigationOne: React.FC<NavigationOneProps> = ({ navigation, date }) => {
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

    if (typeof Icon === "number") {
      return (
        <NavbarStyle.ErrorSection key={key}>
          <ValidationErrorMessage message={`Invalid Icon: ${Icon}`} />
        </NavbarStyle.ErrorSection>
      );
    }

    return (
      <>
        <NavbarStyle.NavLinkInternal key={key} to={link} hoverTitle={title}>
          {typeof Icon === "string" ? Icon : <Icon />}
        </NavbarStyle.NavLinkInternal>
      </>
    );
  };

  return (
    <Fragment>
      {Array.from(navigation).map(([key, { name: Icon, link, title }]) => (
        <Fragment key={key}>{renderNavLink(key, Icon, link, title)}</Fragment>
      ))}
      <NavbarStyle.NavLinkInternal2>{date}</NavbarStyle.NavLinkInternal2>
    </Fragment>
  );
};

export default NavigationOne;
