import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

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

export const TemplateContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "nav nav nav sidebar"
    "main main main sidebar"
    "footer footer footer sidebar";
    text-align: center;
    transition: all 0.25s ease-in-out;
    grid-template-rows: 0.3fr 3fr 1.5fr;
    grid-template-columns: 1fr 1fr 1fr 245px; 

  @media (max-width: 700px) {
      display: flex;
    flex-direction: column;
  }
`;