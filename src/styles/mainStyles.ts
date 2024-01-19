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