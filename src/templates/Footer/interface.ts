import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  '--primary-color'?: string;
  '--secondary-color'?: string;
  '--accent-color'?: string;
  '--background-color'?: string;
  '--text-color'?: string;
  gArea?: string;
  bgc?: string;
  p?: string;
  pt?: string;
  theme?: string;
  maxW?: string;
  clr?: string;
  fSize?: string;
  m?: string;
  mb?: string;
  lineHeight?: string;
  hvr?: string;
  imgWith?: string;
  mr?: string;
}