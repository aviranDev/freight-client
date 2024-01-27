import React, { ReactNode } from "react";
import { GlobalStyles } from "../styles/mainStyles";
import { TemplateContainer } from "../styles/mainStyles";
import Header from "./Navbar/Navbar";
import Main from "./Main";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

interface TemplatesProps {
  children: ReactNode;
}

const Templates: React.FC<TemplatesProps> = ({ children }) => (
  <TemplateContainer>
    <GlobalStyles />
    <Header />
    <Main>{children}</Main>
    {/* <Sidebar /> */}
    <Footer />
  </TemplateContainer>
);

export default Templates;
