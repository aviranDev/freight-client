import { FC } from "react";
import styled from "styled-components";
import { color } from "../../styles/colors";
import { Link } from "react-router-dom";
const { text1, text2 } = color;
import { FooterProps } from "./interface";
import { clrs } from "./footerColors";

export const FooterContainer: FC<FooterProps> = styled.div`
  grid-area: ${({ gArea }) => gArea ?? "footer"};
  background: ${({ bgc }) => bgc || clrs.bgc || "#000"};
  padding: ${({ pad }) => pad ?? ""};
  font-size: ${({ fSize }) => fSize ?? "14px"};
  border-top: ${({ bt }) => bt || `2px solid ${clrs.bTop || "#000"}`};
`;

export const FooterWrapper: FC<FooterProps> = styled.div`
  max-width: ${({ maxW }) => maxW || "1290px"};
  padding: ${({ pad }) => pad || "8px"};
  background-color: ${({ bgc }) => bgc || ""};
  margin: ${({ m }) => m || "0 auto"};
`;

export const FooterGrid: FC<FooterProps> = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-left: ${({ ml }) => ml || "5rem"};

  @media screen and (max-width: 780px) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: ${({ ml }) => ml || 0};
  }
`;

export const FooterLinkContainer: React.FC<FooterProps> = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ m }) => m ?? "20px"};
  margin-top: ${({ mt }) => mt ?? "1.5rem"};

  @media screen and (max-width: 1000px) {
    align-self: auto;
  }
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
  border-top: ${({ bt }) => bt || `1px solid ${clrs.border || "#000"}`};
  margin: auto;
`;

/* works */

export const ExternalLinksContainer: React.FC<FooterProps> = styled.div`
  padding-top: ${({ pad }) => pad ?? "1rem"};
`;

export const ExternalLinks: React.FC<FooterProps> = styled.a`
  color: none;
  font-size: ${({ fSize }) => fSize ?? "20px"};
  margin: 10rem;

  &:hover {
    color: ${({ hvr }) => hvr || text1 || "#000"};
  }

  img {
    width: 150px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
  }
`;

export const IconsContainer = styled.div`
  margin-bottom: 1.3rem;
`;

export const FooterSocialIcon: React.FC<FooterProps> = styled.a`
  color: ${({ clr }) => clr || clrs.iconClr || "#000"};
  font-size: ${({ fSize }) => fSize ?? "25px"};
  margin: ${({ m }) => m ?? "15px"};
  background-color: #16102e;
  border-radius: 55%;
  padding: 10px;
  padding-bottom: 3.6px;
  border: 2px solid ${clrs.iconClr};

  &:hover {
    color: ${({ hvr }) => hvr || clrs.bTop || "#000"};
  }
`;

export const FooterCopyright: React.FC<FooterProps> = styled.div`
  color: ${({ clr }) => clr || text2 || "#000"};
  font-size: ${({ fSize }) => fSize ?? "0.9rem"};
  border-top: ${({ bt }) => bt || `1px solid ${text1 || "#000"}`};
  padding: ${({ pad }) => pad ?? "1rem"};
  margin: 2rem 0 0;
  background-color: #16102e;
`;
