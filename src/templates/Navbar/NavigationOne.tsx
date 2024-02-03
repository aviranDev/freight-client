import React, { Fragment } from "react";
import NavbarStyle from "./NavbarStyles";
import { GeneralNavType } from "./navData";

interface NavigationOneProps {
  generalNav: GeneralNavType;
}

const NavigationOne: React.FC<NavigationOneProps> = ({ generalNav }) => {
  return (
    <>
      {Array.from(generalNav).map(([key, value]) => (
        <Fragment key={key}>
          <NavbarStyle.NavLinkInternal to={value.link} title1={value.title}>
            {typeof value.name === "string" ? value.name : <value.name />}
          </NavbarStyle.NavLinkInternal>
        </Fragment>
      ))}
    </>
  );
};

export default NavigationOne;
