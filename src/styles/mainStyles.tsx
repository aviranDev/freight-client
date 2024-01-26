import styled, { createGlobalStyle } from "styled-components";

/* Global Styles */
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  /* CSS Variables */
  :root {
    --primary-color: #0d1b2a;     
    --secondary-color: #415a77;   
    --accent-color: #778da9;      
    --background-color: #e0e1dd;  
    --text-color: #1b263b;       
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }
`;

/* Template Container Styles */
export const TemplateContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "sidebar nav nav nav"
    "sidebar main main main"
    "sidebar footer footer footer";
  text-align: center;
  transition: all 0.25s ease-in-out;
  grid-template-rows: 0.3fr 3fr 1.5fr;
  grid-template-columns: 15% 1fr 1fr 1fr;

  @media (max-width: 600px) {
    /* Flex Container for Small Screens */
    display: flex;
    flex-direction: column;
  }
`;
