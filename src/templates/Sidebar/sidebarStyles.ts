import styled from "styled-components";
import TemplateProps from "../TemplateProps";

export const SidebarContainer = styled.div<TemplateProps>`
  grid-area: sidebar;
  background: ${({ bgc }) => bgc ?? "var( --background-color)"};
  border-left: 1px solid #ccc; 
  width: 15%;
  border-right: ${({ pt, theme }) =>
    pt ?? `1px solid ${"var(--accent-color)" ?? theme}`};
  
  @media screen and (min-width: 601px) {
    position: fixed;
    height: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    position: static; 
    width: 100%; 
    min-width: 0;
    padding-top: 5rem;
    border-right: none;
  }
  `;

export const SidebarInnerContainer = styled.div`
   width: 100%;
  padding: 20px; 
  ul {
    list-style: none; /* Remove default list styles */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
  }
  li {
    margin-bottom: 10px; /* Add margin between list items */
  }
  a {
    text-decoration: none;
    color: #000;
    /* color: #000; */
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
    &:hover {
      color: #ccc;
    }
  }
`;