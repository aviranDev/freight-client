import React, { Fragment } from "react";
import { NavbarLinkInternal, LeftContainer } from "./NavbarStyles";

const NavigationOne: React.FC<{ generalNav: Map<string, string> }> = (
  props,
) => {
  return (
    <>
      {Array.from(props.generalNav).map(([key, value]) => (
        <Fragment key={key}>
          <NavbarLinkInternal to={value}>{key}</NavbarLinkInternal>
        </Fragment>
      ))}
    </>
  );
};

export default NavigationOne;
