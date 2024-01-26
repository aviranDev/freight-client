import React, { ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  color: red;
  grid-area: main;
`;

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
