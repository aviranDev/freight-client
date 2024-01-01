import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const TemplateContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "nav nav nav"
    "main main main"
    "footer footer footer";
    text-align: center;
    transition: all 0.25s ease-in-out;
    grid-template-rows: 0.3fr 3fr 1.5fr;


  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 2fr 1fr;
    grid-template-areas:
      "nav"
      "main"
      "footer";
  }
`;