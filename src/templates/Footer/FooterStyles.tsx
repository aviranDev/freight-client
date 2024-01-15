import styled from "styled-components";
import { color } from "../../styles/colors";
import { Link } from "react-router-dom";
const { primary, text1, text2, secondary } = color;
import { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * Footer Color Configuration
 *
 * @description
 * Configuration object defining colors used in the footer components.
 *
 * @property {string} background - The background color, defaults to the primary color.
 * @property {string} middleBorder - The color of the middle border, specified as an RGBA value.
 * @property {string} borderTop - The color of the top border, defaults to the text1 color.
 */
const footerColor = {
  background: primary,
  middleBorder: "rgba(255, 132, 132, 0.2)",
  borderTop: text1,
};

/**
 * *************************************************************
 * ********************* FOOTER CONTAINER **********************
 * *************************************************************
 */

/**
 * Interface FooterContainerProps represents the props for styling the FooterContainer component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterContainer component.
 *
 * @interface FooterContainerProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [background] - Optional background color for the FooterContainer.
 * @property {string} [gridArea] - Specify the grid area for the FooterContainer or use 'footer' as the default.
 * @property {string} [padding] - Optional padding around the content inside the FooterContainer.
 * @property {string} [fontSize] - Optional font size for text content inside the FooterContainer.
 * @property {string} [borderTop] - Optional top border style for the FooterContainer.
 * @property {string} [borderTopColor] - Optional top border color for the FooterContainer, using 'text1' as the default.
 */
interface FooterContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  background?: string; // Optional background color for the FooterContainer
  gridArea?: string; // Specify the grid area for the FooterContainer or use 'footer' as the default
  padding?: string; // Optional padding around the content inside the FooterContainer
  fontSize?: string; // Optional font size for text content inside the FooterContainer
  borderTop?: string; // Optional top border style for the FooterContainer
  borderTopColor?: string; // Optional top border color for the FooterContainer, using 'text1' as the default
}

/**
 * FooterContainer is a styled functional component representing a customizable footer container.
 * @component FooterContainer
 *
 * @description
 * This component serves as a flexible container for footer content. It supports various styling options
 * through props, allowing customization of grid area, background color, padding, font size, and top border.
 *
 * @styleguide
 * Default Values:
 * - Grid Area: 'footer'
 * - Background Color: Uses the primary color from the color palette.
 * - Padding: 0.25rem.
 * - Font Size: 14px.
 * - Top Border: A 2px solid line with the color specified by the 'text1' variable.
 *
 * @props {FooterContainerProps} props - The properties to customize the appearance of the FooterContainer.
 * @returns {JSX.Element} The styled FooterContainer component.
 */
export const FooterContainer: React.FC<FooterContainerProps> = styled.div`
  /* Grid area: specified by the 'gridArea' prop or defaults to 'footer' */
  grid-area: ${(props) => props.gridArea ?? "footer"};

  /* Background color: specified by the 'background' prop or defaults to the primary color */
  background: ${(props) =>
    props.background || footerColor.background || "#000"};

  /* Padding: specified by the 'padding' prop or defaults to '0.25rem' */
  padding: ${(props) => props.padding ?? ""};

  /* Font size: specified by the 'fontSize' prop or defaults to '14px' */
  font-size: ${(props) => props.fontSize ?? "14px"};

  /* Top border: specified by the 'borderTop' prop or defaults to a 2px solid line with 'text1' color */
  border-top: ${(props) =>
    props.borderTop ||
    `2px solid ${props.borderTopColor || footerColor.borderTop || "#000"}`};
`;

/**
 * *************************************************************
 * ******************** FOOTER WRAPPER *************************
 * *************************************************************
 */

/**
 * Interface FooterWrapperProps represents the props for styling the FooterWrapper component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterWrapper component.
 *
 * @interface FooterWrapperProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [padding] - Optional padding around the content inside the FooterWrapper.
 * @property {string} [maxWidth] - Optional maximum width for the FooterWrapper.
 */
interface FooterWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  padding?: string;
  maxWidth?: string;
}

/**
 * FooterWrapper is a styled functional component representing a flexible container for footer content.
 * @component FooterWrapper
 *
 * @description
 * This component provides a customizable container for footer content, allowing flexibility
 * in styling through various props. It supports options for setting the maximum width,
 * horizontal centering, and additional padding around the content.
 *
 * @styleguide
 * Default Values:
 * - Maximum Width: 1290px.
 * - Horizontal Centering: Enabled.
 * - Padding: 10px.
 *
 * @props {FooterWrapperProps} props - The properties to customize the appearance of the FooterWrapper.
 * @returns {JSX.Element} The styled FooterWrapper component.
 */
export const FooterWrapper: React.FC<FooterWrapperProps> = styled.div`
  /* Set the maximum width (customize as needed or use the provided prop) */
  max-width: ${(props) => props.maxWidth || "1290px"};

  /* Center horizontally using auto margins */
  margin: 0 auto;

  /* Additional padding for spacing between the content and edges */
  padding: ${(props) => props.padding || "10px"};
`;

/**
 * *************************************************************
 * ********************* Footer Grid ***************************
 * *************************************************************
 */

/**
 * FooterGrid is a styled component representing a responsive grid for footer content.
 * @component FooterGrid
 *
 * @description
 * This component utilizes CSS Grid to create a responsive grid layout for footer items.
 * It automatically adjusts the number of columns based on screen width, with a minimum
 * column width of 200px and equal distribution of available space. The content is centered
 * both horizontally and vertically within the grid.
 *
 * For smaller screens (max-width: 780px), the grid layout switches to a flex layout.
 * Flex items wrap onto the next line, and the flex container changes its direction to column.
 *
 * @styleguide
 * CSS Grid Properties:
 * - Display: Grid layout.
 * - Columns: Responsive, with a minimum width of 200px and equal distribution.
 * - Justify Content: Center horizontally.
 * - Align Items: Center vertically.
 *
 * Flex Layout Properties (Media Query - max-width: 780px):
 * - Display: Flex layout.
 * - Flex Wrap: Allow items to wrap onto the next line.
 * - Flex Direction: Column layout.
 *
 * @returns {JSX.Element} The styled FooterGrid component.
 */
export const FooterGrid = styled.div`
  /* Use CSS Grid for layout */
  display: grid;

  /* Create columns that are responsive */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  /* Center the content horizontally within the grid */
  justify-content: center;

  /* Center the content vertically within the grid */
  align-items: center;

  /* Set margin-left to provide space from the left edge of the container */
  margin-left: 5rem;

  /* Media query for smaller screens (max-width: 780px) */
  @media screen and (max-width: 780px) {
    /* Switch to flex layout for smaller screens */
    display: flex;

    /* Allow flex items to wrap onto the next line */
    flex-wrap: wrap;

    /* Change the direction of the flex container to column */
    flex-direction: column;

    /* Reset margin-left to 0 to ensure proper alignment on smaller screens */
    margin-left: 0;
  }
`;

/**
 * *************************************************************
 * ******************** INTERNAL LINK CONTAINER ****************
 * *************************************************************
 */

/**
 * Interface FooterLinkContainerProps represents the props for styling the FooterLinkContainer component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterLinkContainer component.
 *
 * @interface FooterLinkContainerProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the FooterLinkContainer.
 * @property {string} [margin] - The margin applied to the FooterLinkContainer.
 * @property {string} [fontSize] - The font size of the text content within the FooterLinkContainer.
 * @property {string} [fontWeight] - The font weight of the text content within the FooterLinkContainer.
 */
interface FooterLinkContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

/**
 * FooterLinkContainer is a styled functional component representing a container for footer link items.
 * @component FooterLinkContainer
 *
 * @description
 * This component uses the styled-components library to create a container for footer link items.
 * It employs a flex layout with a column direction, allowing vertical alignment of link items.
 * Customization options include margin, text color, and responsiveness for smaller screens.
 * The default text color is taken from the alert color in the color palette.
 *
 * @styleguide
 * Default Styles:
 * - Flex Layout: Column direction for vertical alignment of link items.
 * - Margin: 25px.
 * - Box Sizing: Borders and padding are included in the total width and height.
 * - Text Color: Uses the alert color from the color palette or a provided custom color.
 *
 * Responsive Styles (Media Query - max-width: 1000px):
 * - Horizontal Alignment: Center link items horizontally for smaller screens.
 *
 * @props {FooterLinkContainerProps} props - The properties to customize the appearance of the FooterLinkContainer.
 * @returns {JSX.Element} The styled FooterLinkContainer component.
 */
export const FooterLinkContainer: React.FC<FooterLinkContainerProps> = styled.div`
  /* Use flex layout with column direction for the link items */
  display: flex;
  flex-direction: column;

  /* Add margin around the link items for spacing */
  margin: ${(props) => props.margin ?? "20px"};

  /* Include padding and borders in the total width and height of the element */
  box-sizing: border-box;

  /* Align the component to the start of the cross axis (vertical alignment) */
  align-self: flex-start;

  /* Media query for smaller screens (max-width: 1000px) */
  @media screen and (max-width: 1000px) {
    /* Center the link items horizontally for smaller screens */
    align-items: center;

    /* or remove this line if it's causing issues */
    align-self: auto;
  }
`;

/**
 * *************************************************************
 * ******************** INTERNAL LINK TITLE ********************
 * *************************************************************
 */

/**
 * Interface FooterLinkTitleProps represents the props for styling the FooterLinkTitle component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterLinkTitle component.
 *
 * @interface FooterLinkTitleProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the FooterLinkTitle.
 * @property {string} [margin] - The margin applied to the FooterLinkTitle.
 * @property {string} [fontSize] - The font size of the text content within the FooterLinkTitle.
 * @property {string} [fontWeight] - The font weight of the text content within the FooterLinkTitle.
 */
interface FooterLinkTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

/**
 * FooterLinkTitle is a styled functional component representing a customizable title for footer links.
 * @component FooterLinkTitle
 *
 * @description
 * This component uses the styled-components library to create a styled h2 title for footer links.
 * It allows customization of text color, margin, font size, and font weight. The default text color
 * is taken from the alert color in the color palette, and the font size is set to 22px with a bold font weight.
 *
 * @styleguide
 * Default Styles:
 * - Text Color: Uses the alert color from the color palette or a provided custom color.
 * - Margin: 16px.
 * - Font Size: 22px.
 * - Font Weight: Bold.
 *
 * @props {FooterLinkTitleProps} props - The properties to customize the appearance of the FooterLinkTitle.
 * @returns {JSX.Element} The styled FooterLinkTitle component.
 */
export const FooterLinkTitle: React.FC<FooterLinkTitleProps> = styled.h2`
  /* Set the text color using the alert color from the color palette or a provided custom color */
  color: ${(props) => props.color || text1 || "#000"};
  margin-top: ${(props) => props.margin ?? "16px"};

  /* Add margin around the link title for spacing */
  margin-bottom: ${(props) => props.margin ?? "16px"};

  /* Set the font size for the link title */
  font-size: ${(props) => props.fontSize ?? "22px"};

  /* Set the font weight to bold for emphasis */
  font-weight: ${(props) => props.fontWeight ?? "bold"};

  /* Capitalize the text */
  text-transform: capitalize;

  /* Align the component to the start of the cross axis (vertical alignment) */
  align-self: flex-start;
`;

/**
 * *************************************************************
 * ******************** INTERNAL LINK ITEM *********************
 * *************************************************************
 */

/**
 * Interface FooterLinkItemProps represents the props for styling the FooterLinkItem component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterLinkItem component.
 *
 * @interface FooterLinkItemProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the FooterLinkItem.
 * @property {string} [to] - The link or URL to navigate to when the FooterLinkItem is clicked.
 * @property {string} [marginBottom] - The margin applied to the bottom of the FooterLinkItem.
 * @property {string} [hover] - The styling applied on hover for the FooterLinkItem.
 * @property {string} [fontSize] - The font size of the text content within the FooterLinkItem.
 */
interface FooterLinkItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  to?: string;
  marginBottom?: string;
  hover?: string;
  fontSize?: string;
}

/**
 * FooterLinkItem is a styled functional component representing a customizable link in the footer.
 * @component FooterLinkItem
 *
 * @description
 * This component uses the styled-components library to create a customized link with options
 * for text color, margin, and hover styles. It extends the React Router `Link` component,
 * making it suitable for navigation within a React application. The default text color is
 * taken from the accent color in the color palette.
 *
 * @styleguide
 * Default Styles:
 * - Text Color: Uses the accent color from the color palette or a provided custom color.
 * - Text Decoration: No underline (removes the default underline decoration for links).
 * - Bottom Margin: 0.7rem.
 *
 * Hover Styles:
 * - Text Color: Changes to the alert color from the color palette or a provided custom hover color.
 * - Transition: Smooth transition effect over 0.3 seconds.
 *
 * @props {FooterLinkItemProps} props - The properties to customize the appearance of the FooterLinkItem.
 * @returns {JSX.Element} The styled FooterLinkItem component.
 */
export const FooterLinkItem: React.FC<FooterLinkItemProps> = styled(Link)`
  /* Set the text color using the accent color from the color palette */
  color: ${(props) => props.color || text2 || "#000"};

  /* Remove the default underline decoration for links */
  text-decoration: none;

  /* Add some bottom margin to the link for spacing */
  margin-bottom: ${(props) => props.marginBottom ?? "0.7rem"};

  /* Align links to the start (left) vertically */
  align-self: flex-start;

  /* Set the line height for better vertical spacing of the text within the link */
  line-height: 2ch;

  /* Capitalize the text */
  text-transform: capitalize;

  /* Set font size to the provided value or a default of 13px */
  font-size: ${(props) => props.fontSize ?? "15px"};

  /* Set font weight to bold */
  font-weight: bold;

  /* Apply styles for the hover state */
  &:hover {
    /* Change text color on hover using the alert color from the color palette */
    color: ${(props) => props.hover ?? text1};

    /* Add a smooth transition effect over 0.3 seconds */
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 0; /* Adjust margin for smaller screens */
    text-align: center; /* Center the text for smaller screens */
  }
`;

/**
 * *************************************************************
 * ********************* MIDDLE BORDER *************************
 * *************************************************************
 */

/**
 * CenteredBorder is a styled component representing a container with a centered border.
 * @component CenteredBorder
 *
 * @description
 * This component uses flexbox to center its content horizontally and vertically.
 * It has a default width of 100%, a maximum width of 1100px, and a 1px solid top border.
 * The component is horizontally centered using the `margin: auto` property.
 * On smaller screens, additional padding is added for a better visual experience.
 *
 * @styleguide
 * Default Styles:
 * - Display: Flex layout.
 * - Justify Content: Center horizontally.
 * - Align Items: Center vertically.
 * - Width: 100%.
 * - Maximum Width: 1100px.
 * - Top Border: 1px solid color specified by `footerColor.middleBorder`.
 * - Margin: Auto for horizontal centering.
 *
 * Responsive Styles (Media Queries):
 * - Screen width up to 1100px: Additional padding of 20px.
 * - Screen width up to 768px: Further reduced padding to 10px.
 *
 * @returns {JSX.Element} The styled CenteredBorder component.
 */
export const CenteredBorder = styled.div`
  /* Use flexbox for layout */
  display: flex;

  /* Center content along the main axis (horizontal) */
  justify-content: center;

  /* Center content along the cross axis (vertical) */
  align-items: center;

  /* Use 100% width by default */
  width: 100%;

  /* Set a maximum width */
  max-width: 1100px;

  /* Top border with color specified by footerColor.middleBorder */
  border-top: 1px solid ${footerColor.middleBorder};

  /* Center the component horizontally using margin: auto */
  margin: auto;

  /* Media query for screen width up to 1100px */
  @media screen and (max-width: 1100px) {
    /* Add additional padding for a better visual experience */
    padding: 0 20px;
  }

  /* Media query for screen width up to 768px */
  @media screen and (max-width: 768px) {
    /* Further reduce padding for smaller screens */
    padding: 0 10px;
  }
`;

/**
 * *************************************************************
 * ********************* EXTERNAL LINKS ************************
 * *************************************************************
 */

/**
 * Interface FooterExternalContainerProps represents the props for styling the FooterExternalContainer component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterExternalContainer component.
 *
 * @interface FooterExternalContainerProps
 * @extends DetailedHTMLPropsHTMLAttributesHTMLDivElement
 * @property {string} [padding] - The padding applied to the content inside the FooterExternalContainer.
 */
interface FooterExternalContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  padding?: string;
}

/**
 * ExternalLinksContainer is a styled functional component representing a container for external links in the footer.
 * @component ExternalLinksContainer
 *
 * @description
 * This component uses the styled-components library to create a container for external links in the footer.
 * It allows customization of padding around the content.
 *
 * @styleguide
 * Default Styles:
 * - Padding: 1rem (adjustable via the `padding` prop).
 *
 * @props {FooterExternalContainerProps} props - The properties to customize the appearance of the ExternalLinksContainer.
 * @returns {JSX.Element} The styled ExternalLinksContainer component.
 */
export const ExternalLinksContainer: React.FC<FooterExternalContainerProps> = styled.div`
  /* Add padding around the content */
  padding-top: ${(props) => props.padding ?? "1rem"};
`;

/**
 * Interface FooterExternalLinksProps represents the props for styling the FooterExternalLinks component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterExternalLinks component.
 *
 * @interface FooterExternalLinksProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the FooterExternalLinks.
 * @property {string} [fontSize] - The font size of the text content within the FooterExternalLinks.
 * @property {string} [margin] - The margin applied to the FooterExternalLinks.
 * @property {string} [hover] - The styling applied on hover for the FooterExternalLinks.
 * @property {string} [href] - The link or URL to navigate to when the FooterExternalLinks is clicked.
 * @property {string} [target] - The target attribute for the link, specifying where to open the linked document.
 * @property {string} [borderTopColor] - The color of the top border for the FooterExternalLinks.
 */
interface FooterExternalLinksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  fontSize?: string;
  margin?: string;
  hover?: string;
  href?: string;
  target?: string;
  borderTopColor?: string;
}

/**
 * ExternalLinks is a styled functional component representing a link for external social media icons in the footer.
 * @component ExternalLinks
 *
 * @description
 * This component serves as a styled link for social media icons. It supports customization
 * of color, font size, margin, and hover color through props. The default color is taken
 * from the secondary color in the color palette. On hover, the text color changes to the
 * default text color from the palette or a custom hover color if provided.
 *
 * @styleguide
 * Default Styles:
 * - Text Color: Uses the secondary color from the color palette or a provided custom color.
 * - Font Size: 20px.
 * - Margin: 5.5px.
 *
 * Hover Styles:
 * - Text Color: Changes to the default text color from the color palette or a provided custom hover color.
 *
 * Responsive Styles (Media Query - max-width: 1000px):
 * - Display: Flex layout.
 * - Flex Direction: Column layout.
 * - Margin: 2rem.
 * - Align Items: Center horizontally.
 *
 * @props {FooterExternalLinksProps} props - The properties to customize the appearance of the ExternalLinks.
 * @returns {JSX.Element} The styled ExternalLinks component.
 */
export const ExternalLinks: React.FC<FooterExternalLinksProps> = styled.a`
  /* Set the text color using the background color from the color palette */
  color: none;

  /* Set the font size for the social icon */
  font-size: ${(props) => props.fontSize ?? "20px"};

  /* Additional margin for mobile responsiveness */
  margin: 10rem;

  /* Apply styles for the hover state */
  &:hover {
    /* Change text color on hover using the alert color from the color palette */
    color: ${(props) => props.hover || text1 || "#000"};
  }

  /* Set a fixed width for the embedded image */
  img {
    width: 150px;
  }

  /* Media query for smaller screens (max-width: 1000px) */
  @media screen and (max-width: 1000px) {
    /* Switch to flex layout for smaller screens */
    display: flex;

    /* Change flex direction to column for vertical alignment */
    flex-direction: column;

    /* Adjust margin for spacing on smaller screens */
    margin: 2rem;

    /* Center the items horizontally */
    align-items: center;
  }
`;

/**
 * *************************************************************
 * ********************** SOCIAL ICON **************************
 * *************************************************************
 */

/**
 * IconsContainer is a styled component representing a container for footer icons.
 * @component IconsContainer
 *
 * @description
 * This component serves as a container for footer icons. You can add any additional styles here as needed.
 *
 * @styleguide
 * Default Styles:
 * - Margin Bottom: 2rem.
 *
 * @returns {JSX.Element} The styled IconsContainer component.
 */
export const IconsContainer = styled.div`
  /* Add any styles you want for the FooterIcons container */
  margin-bottom: 1.3rem;
`;

/**
 * Interface FooterSocialIconProps represents the props for styling the FooterSocialIcon component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the FooterSocialIcon component.
 *
 * @interface FooterSocialIconProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the FooterSocialIcon.
 * @property {string} [fontSize] - The font size of the text content within the FooterSocialIcon.
 * @property {string} [margin] - The margin applied to the FooterSocialIcon.
 * @property {string} [hover] - The styling applied on hover for the FooterSocialIcon.
 * @property {string} [href] - The link or URL to navigate to when the FooterSocialIcon is clicked.
 * @property {string} [target] - The target attribute for the link, specifying where to open the linked document.
 */
interface FooterSocialIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  fontSize?: string;
  margin?: string;
  hover?: string;
  href?: string;
  target?: string;
}

/**
 * FooterSocialIcon is a styled functional component representing a social media icon.
 * @component FooterSocialIcon
 *
 * @description
 * This component serves as a styled link for social media icons. It supports customization
 * of color, font size, margin, and hover color through props. The default color is taken
 * from the secondary color in the color palette. On hover, the text color changes to the
 * default text color from the palette or a custom hover color if provided.
 *
 * @styleguide
 * Default Styles:
 * - Text Color: Uses the secondary color from the color palette or a provided custom color.
 * - Font Size: 20px.
 * - Margin: 5.5px.
 *
 * Hover Styles:
 * - Text Color: Changes to the default text color from the color palette or a provided custom hover color.
 *
 * @props {FooterSocialIconProps} props - The properties to customize the appearance of the FooterSocialIcon.
 * @returns {JSX.Element} The styled FooterSocialIcon component.
 */
export const FooterSocialIcon: React.FC<FooterSocialIconProps> = styled.a`
  /* Set the text color using the background color from the color palette */
  color: ${(props) => props.color || secondary || "#000"};

  /* Set the font size for the social icon */
  font-size: ${(props) => props.fontSize ?? "25px"};

  /* Add margin around the social icon */
  margin: ${(props) => props.margin ?? "15px"};

  // Background color for the icon container
  background-color: #16102e;

  // Adjust the border-radius as needed
  border-radius: 55%;

  // Optional: Add padding for extra spacing around the icon
  padding: 10px;

  padding-bottom: 3.6px;

  // Border around the icon
  border: 2px solid ${secondary};

  /* Apply styles for the hover state */
  &:hover {
    /* Change text color on hover using the alert color from the color palette */
    color: ${(props) => props.hover || text1 || "#000"};
  }
`;

/**
 * *************************************************************
 * ************************** RIGHTS ***************************
 * *************************************************************
 */

/**
 * Interface RightsProps represents the props for styling the Rights component.
 * It extends DetailedHTMLProps for HTMLDivElement, allowing all standard HTML div attributes,
 * and includes additional optional styling props specific to the Rights component.
 *
 * @interface RightsProps
 * @extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
 * @property {string} [color] - The color of the text content within the Rights component.
 * @property {string} [fontSize] - The font size of the text content within the Rights component.
 * @property {string} [borderTopColor] - The color of the top border for the Rights component.
 * @property {string} [padding] - The padding applied to the content inside the Rights component.
 */
interface RightsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
  fontSize?: string;
  borderTopColor?: string;
  padding?: string;
}

/**
 * Rights is a styled functional component representing the rights section in the footer.
 * @component Rights
 *
 * @description
 * This component uses the styled-components library to create a styled div for the rights section
 * in the footer. It supports customization of text color, width, font size, top border, padding,
 * and margin. The default text color is taken from the text2 color in the color palette, and the
 * default font size is set to 0.9rem. The top border can be customized or defaults to a 1px solid
 * line with the text1 color from the palette. The element has 100% width by default.
 *
 * @styleguide
 * Default Styles:
 * - Text Color: Uses the text2 color from the color palette or a provided custom color.
 * - Width: 100%.
 * - Font Size: 0.9rem.
 * - Top Border: A 1px solid line with the color specified by the 'borderTopColor' prop or the text1 color.
 * - Padding: 1.5rem.
 * - Margin: 2rem at the top, pushing the element down.
 * - Background Color: #16102e.
 *
 * @props {RightsProps} props - The properties to customize the appearance of the Rights component.
 * @returns {JSX.Element} The styled Rights component.
 */
export const Rights: React.FC<RightsProps> = styled.div`
  /* Set the text color using the alert color from the color palette or a provided custom color */
  color: ${(props) => props.color || text2 || "#000"};

  /* Set the width to 100% */
  width: 100%;

  /* Set the font size for the link title */
  font-size: ${(props) => props.fontSize ?? "0.9rem"};

  /* Top border: specified by the 'borderTop' prop or defaults to a 2px solid line with 'text1' color */
  border-top: ${(props) =>
    props.borderTopColor ||
    `1px solid ${props.borderTopColor || text1 || "#000"}`};

  /* Add padding around the content */
  padding: ${(props) => props.padding ?? "1.5rem"};

  /* Add margin to the top, pushing the element down */
  margin: 2rem 0 0;

  /* Set a background color for the element */
  background-color: #16102e;
`;
