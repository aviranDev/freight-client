import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgc?: string;   // Optional background color for the FooterContainer
  gArea?: string; // Specify the grid area for the FooterContainer; default is 'footer'
  pad?: string;   // Optional padding around the content inside the FooterContainer
  fSize?: string; // Optional font size for text content inside the FooterContainer
  bTop?: string;    // Optional border top style for the FooterContainer
  maxW?: string;  // Optional maximum width for the FooterWrapper
  pt?: string;  // Optional padding-top
  m?: string;     // Optional margin for the FooterWrapper
  mb?: string;    // Optional margin-bottom for the FooterWrapper
  ml?: string;    // Optional margin-left for the FooterWrapper
  mr?: string;    // Optional margin-right for the FooterWrapper
  mt?: string;    // Optional margin-top for the FooterWrapper
  clr?: string;   // Optional color for styling elements within the Footer
  hvr?: string;   // Optional hover effect for styling elements within the Footer
  href?: string;
  target?: string;
  imgWith?: string;
  to?: string;
}