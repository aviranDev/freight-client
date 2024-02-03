import React, { ReactNode } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
  grid-area: main;
  width: 100%;
  padding-top: 100px;

  @media (max-width: 1200px) {
    /* Adjust the max-width and other styles as needed */
    max-width: 70%;
    margin: 0 auto; /* Center the content */
  }
`;

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
