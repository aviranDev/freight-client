import styled from "styled-components";

export const SidebarContainer = styled.div`
 grid-area: sidebar;
  background: #16102E;
  border-left: 1px solid #ccc; 
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
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
    &:hover {
      color: #ccc;
    }
  }
`;