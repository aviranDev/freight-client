import styled from "styled-components";
import { Link } from "react-router-dom";
import { FooterProps } from "./interface";
import { color } from "../../styles/colors";
const { primary, text1, text2 } = color;

const FooterStyle = {
  Wrapper: styled.div<FooterProps>`
    grid-area: ${({ gArea }) => gArea ?? "footer"};
    background: ${({ bgc }) => bgc || primary || "#000"};
    padding: ${({ p }) => p ?? ""};
    border-top: ${({ pt, theme }) =>
      pt || `1px solid ${text1 || theme || "#000"}`};
  `,
  Section1: styled.div<FooterProps>`
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
  `,
  CenteredBorder: styled.div<FooterProps>`
    display: flex;
    max-width: ${({ maxW }) => maxW ?? "1100px"};
    border-top: ${({ pt, theme }) =>
      pt || `1px solid ${"rgba(255, 132, 132, 0.2)" || theme || "#000"}`};
    margin: auto;
  `,
  Section2: styled.div<FooterProps>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: ${({ maxW }) => maxW || "1000px"};
    padding: ${({ p }) => p ?? "1rem"};
    margin: 0 auto;
  `,
  Section3: styled.div<FooterProps>`
    display: flex;
    justify-content: center;
    background-color: ${({ bgc }) => bgc ?? "#16102e"};
    color: ${({ clr }) => clr || text2 || "#000"};
    font-size: ${({ fSize }) => fSize ?? "0.9rem"};
    border-top: ${({ pt, theme }) =>
      pt ?? `1px solid ${text1 || theme || "#000"}`};
    padding: ${({ p }) => p ?? "1rem"};
  `,
  InternalLinkContainer: styled.div<FooterProps>`
    display: flex;
    flex-direction: column;
    margin: ${({ m }) => m ?? "1.5rem 0 1rem 0"};
  `,
  InternalLinkTitle: styled.h2<FooterProps>`
    margin-bottom: ${({ mb }) => mb ?? "16px"};
    color: ${({ clr }) => clr || text1 || "#000"};
    font-size: ${({ fSize }) => fSize ?? "22px"};
    text-transform: capitalize;
    align-self: flex-start;
    font-weight: 700;
  `,
  InternalLinkItem: styled(Link)<FooterProps>`
    color: ${({ clr }) => clr || text2 || "#000"};
    text-decoration: none;
    margin-bottom: ${({ mb }) => mb ?? "0.7rem"};
    align-self: flex-start;
    line-height: ${({ lineHeight }) => lineHeight || 1};
    text-transform: capitalize;
    font-size: ${({ fSize }) => fSize ?? "15px"};
    font-weight: bold;
    transition: 0.3s ease-out;

    &:hover {
      color: ${({ hvr }) => hvr ?? text1};
    }
  `,
  ExternalLinkImg: styled.a<FooterProps>`
    align-self: baseline;
    img {
      width: ${({ imgWith }) => imgWith ?? "150px"};
    }
  `,
  LinksWebInfo: styled(Link)<FooterProps>`
    margin-right: ${({ mr }) => mr ?? "4rem"};
    color: ${({ clr }) => clr || text2 || "#000"};
    font-size: ${({ fSize }) => fSize ?? "15px"};
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: ${({ hvr }) => hvr || text1 || "#000"};
    }
  `,
  CopyrightContainer: styled.div<FooterProps>`
    font-size: ${({ fSize }) => fSize ?? "15px"};
    color: ${({ clr }) => clr || text2 || "#000"};

    .current-year {
      margin-right: 5px;
    }
  `,
};

export default FooterStyle;
