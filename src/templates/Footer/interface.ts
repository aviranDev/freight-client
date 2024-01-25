import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  p?: string;   // Optional padding around the content inside the FooterContainer
  pt?: string;  // Optional padding-top
  bgc?: string;   // Optional background color for the FooterContainer
  gArea?: string; // Specify the grid area for the FooterContainer; default is 'footer'
  fSize?: string; // Optional font size for text content inside the FooterContainer
  maxW?: string;  // Optional maximum width for the FooterWrapper
  m?: string;     // Optional margin for the FooterWrapper
  mb?: string;    // Optional margin-bottom for the FooterWrapper
  ml?: string;    // Optional margin-left for the FooterWrapper
  mr?: string;    // Optional margin-right for the FooterWrapper
  mt?: string;    // Optional margin-top for the FooterWrapper
  clr?: string;   // Optional color for styling elements within the Footer
  hvr?: string;   // Optional hover effect for styling elements within the Footer
  lineHeight?: string;   // Optional hover effect for styling elements within the Footer
  href?: string;
  target?: string;
  imgWith?: string;
  to?: string;
}