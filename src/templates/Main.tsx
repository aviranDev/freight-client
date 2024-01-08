import React, { ReactNode } from "react";
import styled from "styled-components";
import { color } from "../styles/colors";

const MainContainer = styled.main`
  background: ${color.background};
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
