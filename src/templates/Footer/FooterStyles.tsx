import styled from "styled-components";
import { Link } from "react-router-dom";
import TemplateProps from "../TemplateProps";

const border = "var(--accent-color)";
const wrapper = "var(--text-color)";
const title = "var(--background-color)";
const color = "var(--accent-color)";
const footer = "var(--primary-color)";
const hover = "var(--background-color)";

/**
 * Styled components for the Footer section of the application.
 */
const FooterStyle = {
  // Wrapper for the entire Footer section
  Wrapper: styled.div<Partial<TemplateProps>>`
    grid-area: ${({ gArea }) => gArea ?? "footer"};
    background: ${({ bgc }) => bgc ?? wrapper};
    padding: ${({ p }) => p ?? ""};
    border-top: ${({ pt, theme }) => pt ?? `1px solid ${border ?? theme}`};
    margin-top: auto;
  `,

  // Section1 styling for internal links
  Section1: styled.div<Partial<TemplateProps>>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: ${({ maxWidth }) => maxWidth || "1290px"};
    margin: 0 auto;
    justify-items: center;
    margin-top: ${({ pt }) => pt || "8px"};
    background-color: ${({ bgc }) => bgc ?? "none"};

    @media screen and (max-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
    }
  `,

  // CenteredBorder between sections
  CenteredBorder: styled.div<Partial<TemplateProps>>`
    display: flex;
    max-width: ${({ maxWidth }) => maxWidth ?? "1100px"};
    border-top: ${({ pt, theme }) => pt ?? `1px solid ${border ?? theme}`};
    margin: auto;
  `,

  // Section2 styling for external links
  Section2: styled.div<Partial<TemplateProps>>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: ${({ maxWidth }) => maxWidth || "1000px"};
    padding: ${({ p }) => p ?? "1rem"};
    margin: 0 auto;
  `,

  // Section3 styling for web links and copyright
  Section3: styled.div<Partial<TemplateProps>>`
    display: flex;
    justify-content: center;
    background-color: ${({ bgc }) => bgc ?? footer};
    color: ${({ clr }) => clr ?? ""};
    font-size: ${({ fSize }) => fSize ?? "0.9rem"};
    border-top: ${({ pt, theme }) => pt ?? `1px solid ${border ?? theme}`};
    padding: ${({ p }) => p ?? "1rem"};
  `,

  // Container for internal links
  InternalLinkContainer: styled.div<Partial<TemplateProps>>`
    display: flex;
    flex-direction: column;
    margin: ${({ m }) => m ?? "1.5rem 0 1rem 0"};
  `,

  // Title styling for internal links
  InternalLinkTitle: styled.h2<Partial<TemplateProps>>`
    margin-bottom: ${({ mb }) => mb ?? "16px"};
    color: ${({ clr }) => clr ?? title};
    font-size: ${({ fSize }) => fSize ?? "22px"};
    text-transform: capitalize;
    align-self: flex-start;
    font-weight: 700;
  `,

  // Styling for individual internal links
  InternalLinkItem: styled(Link)<Partial<TemplateProps>>`
    color: ${({ clr }) => clr ?? color};
    text-decoration: none;
    margin-bottom: ${({ mb }) => mb ?? "0.7rem"};
    align-self: flex-start;
    line-height: ${({ lineHeight }) => lineHeight || 1};
    text-transform: capitalize;
    font-size: ${({ fSize }) => fSize ?? "15px"};
    font-weight: bold;
    transition: 0.3s ease-out;

    &:hover {
      color: ${({ hvr }) => hvr ?? hover};
    }
  `,

  // Styling for external links with images
  ExternalLinkImg: styled.a<Partial<TemplateProps>>`
    align-self: baseline;
    img {
      width: ${({ imgWith }) => imgWith ?? "150px"};
    }
  `,

  // Styling for web links
  LinksWebInfo: styled(Link)<Partial<TemplateProps>>`
    margin-right: ${({ mr }) => mr ?? "4rem"};
    color: ${({ clr }) => clr ?? color};
    font-size: ${({ fSize }) => fSize ?? "15px"};
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: ${({ hvr }) => hvr ?? hover};
    }
  `,

  // Styling for the copyright container
  CopyrightContainer: styled.div<Partial<TemplateProps>>`
    font-size: ${({ fSize }) => fSize ?? "15px"};
    color: ${({ clr }) => clr ?? color};

    .current-year {
      margin-right: 5px;
    }
  `,
};

export default FooterStyle;
