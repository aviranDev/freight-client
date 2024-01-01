import React, { ReactNode } from "react";
import { GlobalStyles } from "../styles/mainStyles";
import { TemplateContainer } from "../styles/mainStyles";
import Header from "./Navbar/Navbar";
import Main from "./Main";
import Footer from "./Footer/Footer";

interface TemplatesProps {
  children: ReactNode;
}

const Templates: React.FC<TemplatesProps> = ({ children }) => (
  <TemplateContainer>
    <GlobalStyles />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </TemplateContainer>
);

export default Templates;
