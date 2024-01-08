import React, { Fragment } from "react";
import { NavbarLinkInternal, LeftContainer, Container } from "./NavbarStyles";

interface LeftNavigationProps {
  generalNav: Map<string, string>;
}

const LeftNavigation: React.FC<LeftNavigationProps> = (props) => (
  <LeftContainer>
    <Container>
      {Array.from(props.generalNav).map(([key, value]) => (
        <Fragment key={key}>
          <NavbarLinkInternal to={value}>{key}</NavbarLinkInternal>
        </Fragment>
      ))}
    </Container>
  </LeftContainer>
);

export default LeftNavigation;
