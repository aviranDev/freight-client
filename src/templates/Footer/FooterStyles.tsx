import styled from "styled-components";
import { color } from "../../styles/colors";
import { Link } from "react-router-dom";
const { primary, text1, text2, background } = color;

export const FooterContainer = styled.div`
  /* Background color using the primary color from the color palette */
  background: ${primary};
  /* Define the grid area named 'footer' where this component will be placed */
  grid-area: footer;
  /* Padding around the content inside the FooterContainer */
  padding: 0.25rem;
  /* Font size for text content inside the FooterContainer */
  font-size: 14px; /* Adjust font size as needed */
  border-top: 2px solid ${text1}; /* Fix the typo here */
`;

export const FooterWrapper = styled.div`
  /* Set the maximum width of the FooterWrapper to 1290 pixels */
  max-width: 1290px;
  /* Center the FooterWrapper horizontally by applying auto margins on the left and right */
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  /* Use CSS Grid for layout */
  display: grid;
  /* Create columns that are responsive, 
  with a minimum width of 200px and a maximum width of 1fr (equal distribution) */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Center the content horizontally within the grid */
  justify-content: center;
  /* Center the content vertically within the grid */
  align-items: center;

  /* Media query for smaller screens (max-width: 780px) */
  @media screen and (max-width: 780px) {
    /* Switch to flex layout for smaller screens */
    display: flex;
    /* Allow flex items to wrap onto the next line */
    flex-wrap: wrap;
    /* Change the direction of the flex container to column */
    flex-direction: column;
  }
`;

export const FooterSocialIcon = styled.a`
  /* Set the text color using the background color from the color palette */
  color: ${background};
  /* Set the font size for the social icon */
  font-size: 20px;
  /* Add margin around the social icon */
  margin: 5px;

  /* Apply styles for the hover state */
  &:hover {
    /* Remove background on hover */
    background: none;
    /* Change text color on hover using the alert color from the color palette */
    color: ${text1};
  }
`;

export const FooterLink = styled(Link)`
  /* Set the text color using the accent color from the color palette */
  color: ${text2};
  /* Remove the default underline decoration for links */
  text-decoration: none;
  /* Add some bottom margin to the link for spacing */
  margin-bottom: 0.7rem;
  /* Apply styles for the hover state */
  &:hover {
    /* Remove background on hover */
    background: none;
    /* Change text color on hover using the alert color from the color palette */
    color: ${text1};
    /* Add a smooth transition effect over 0.3 seconds */
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkTitle = styled.h2`
  /* Add margin around the link title for spacing */
  margin: 16px;
  /* Set the font size for the link title */
  font-size: 22px;
  /* Set the font weight to bold for emphasis */
  font-weight: bold;
  /* Set the text color using the alert color from the color palette */
  color: ${text1};
`;

export const FooterLinkItems = styled.div`
  /* Use flex layout with column direction for the link items */
  display: flex;
  flex-direction: column;
  /* Add margin around the link items for spacing */
  margin: 25px;
  /* Include padding and borders in the total width and height of the element */
  box-sizing: border-box;
  /* Set the text color using the alert color from the color palette */
  color: ${text1};

  /* Media query for smaller screens (max-width: 1000px) */
  @media screen and (max-width: 1000px) {
    /* Center the link items horizontally for smaller screens */
    align-items: center;
  }
`;

export const Rights = styled.div`
  /* Set the text color using the accent color from the color palette */
  color: ${text2};
  /* Set the width to 100% */
  width: 100%;
  /* Set the font size for the rights text */
  font-size: 0.9rem;
  /* Add a top border with color from the alert color in the color palette */
  border-top: 1px solid ${text1};
  /* Add padding around the content */
  padding: 1.5rem;
  /* Add margin to the top, pushing the element down */
  margin: 2rem 0 0;
`;
