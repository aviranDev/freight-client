import { DetailedHTMLProps, HTMLAttributes } from "react";

interface TemplateProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  "--primary-color"?: string;
  "--secondary-color"?: string;
  "--accent-color"?: string;
  "--background-color"?: string;
  "--text-color"?: string;
  maxWidth?: string;
  gArea?: string;
  bgc?: string;
  p?: string;
  pt?: string;
  theme?: string;
  clr?: string;
  fSize?: string;
  m?: string;
  mb?: string;
  lineHeight?: string;
  hvr?: string;
  imgWith?: string;
  mr?: string;
  generalNav?: string;
  order?: number;
  $isvisible?: boolean;
  hovertitle?: string;
}

export default TemplateProps;
