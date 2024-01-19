import { FC } from "react";
import styled from "styled-components";
import { color } from "../../styles/colors";
import { Link } from "react-router-dom";
import { FooterProps } from "./interface";
import { clrs } from "./footerColors";
const { text1, text2 } = color;

export const FooterWrapper: FC<FooterProps> = styled.div`
  grid-area: ${({ gArea }) => gArea ?? "footer"};
  background: ${({ bgc }) => bgc || clrs.bgc || "#000"};
  padding: ${({ pad }) => pad ?? ""};
  border-top: ${({ bTop }) => bTop || `1px solid ${clrs.bTop || "#000"}`};
`;

export const FooterSectionOne: FC<FooterProps> = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: ${({ maxW }) => maxW || "1290px"};
  margin: 0 auto;
  justify-items: center;
  margin-top: ${({ pt }) => pt || "8px"};
  background-color: ${({ bgc }) => bgc || ""};

  @media screen and (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterSectionTwo: React.FC<FooterProps> = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  max-width: ${({ maxW }) => maxW || "1000px"};
  padding: 1rem;
  place-items: center;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    & > :first-child,
    & > :last-child {
      padding-left: 2%;
      padding-right: 2%;
    }
  }
`;

export const FooterSectionThree: React.FC<FooterProps> = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ bgc }) => bgc ?? "#16102e"};
  color: ${({ clr }) => clr || text2 || "#000"};
  font-size: ${({ fSize }) => fSize ?? "0.9rem"};
  border-top: ${({ bTop }) => bTop ?? `1px solid ${text1 || "#000"}`};
  padding: ${({ pad }) => pad ?? "1rem"};
`;

/**
 * **********************************************************************************
 */

export const FooterLinkContainer: React.FC<FooterProps> = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ m }) => m ?? "10px"};
  margin-top: ${({ mt }) => mt ?? "1.5rem"};
`;

export const FooterLinkTitle: React.FC<FooterProps> = styled.h2`
  margin-bottom: ${({ mb }) => mb ?? "16px"};
  color: ${({ clr }) => clr || text1 || "#000"};
  font-size: ${({ fSize }) => fSize ?? "22px"};
  font-weight: ${({ fSize }) => fSize ?? "bold"};
  text-transform: capitalize;
  align-self: flex-start;
`;

export const FooterLinkItem: FC<FooterProps> = styled(Link)`
  color: ${({ clr }) => clr || text2 || "#000"};
  text-decoration: none;
  margin-bottom: ${({ mb }) => mb ?? "0.7rem"};
  align-self: flex-start;
  line-height: 2ch;
  text-transform: capitalize;
  font-size: ${({ fSize }) => fSize ?? "15px"};
  font-weight: bold;

  &:hover {
    color: ${({ hvr }) => hvr ?? text1};
    transition: 0.3s ease-out;
  }
`;

export const CenteredBorder: FC<FooterProps> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxW }) => maxW ?? "1100px"};
  border-top: ${({ bTop }) => bTop || `1px solid ${clrs.border || "#000"}`};
  margin: auto;
`;

export const ExternalLink: React.FC<FooterProps> = styled.a`
  color: inherit;
  align-self: baseline;

  img {
    width: ${({ imgWith }) => imgWith ?? "150px"};
  }
`;

export const LinksContainer = styled.div`
  text-align: justify;
`;

export const FooterLinks: React.FC<FooterProps> = styled(Link)`
  color: ${({ clr }) => clr || clrs.iconClr || "#000"};
  margin-right: ${({ mr }) => mr ?? "4rem"};
  font-size: ${({ fSize }) => fSize ?? "18px"};
  background-color: #16102e;
  text-decoration: none;
  &:hover {
    color: ${({ hvr }) => hvr || clrs.bTop || "#000"};
  }
`;
