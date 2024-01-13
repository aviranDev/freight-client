import styled from "styled-components";
import { color } from "../../styles/colors";

export const SidebarContainer = styled.div`
 grid-area: sidebar;
  min-height: 150px;
  background: #16102E;
  border-left: 2px solid ${color.text1}; /* Fix the typo here */
  border-right: 2px solid ${color.text1}; /* Fix the typo here */
`;

export const SidebarInnerContainer = styled.div`
   width: 100%;
  padding: 20px; /* Add padding for better spacing */
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
    color: ${color.text1};
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
    &:hover {
      color: ${color.secondary};
    }
  }
`;