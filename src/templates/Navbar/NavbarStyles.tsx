import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import TemplateProps from "../TemplateProps";

interface OpenLinksButtonProps {
  collapse: boolean; // Define the prop here
}

const NavbarStyle = {
  Wrapper: styled.div<TemplateProps>`
    grid-area: ${({ gArea }) => gArea ?? "nav"};
    background: ${({ bgc }) => bgc ?? "var(--secondary-color)"};
    padding: ${({ p }) => p ?? "0rem"};
    border-bottom: ${({ pt, theme }) =>
      pt ?? `1px solid ${"var(--secondary-color)" ?? theme}`};
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translateY(${({ $isvisible }) => ($isvisible ? 0 : "-100%")});
    opacity: ${({ $isvisible }) => ($isvisible ? 1 : 0)};
    position: fixed;
    top: 0;
    width: calc(100% - 15%);
    margin-left: 15%;
    z-index: 1000;

    @media (max-width: 1200px) {
      width: 100%;
      margin: auto 0;
    }
  `,
  InnerContainer: styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
  `,
  NavContainer: styled.div<TemplateProps>`
    display: flex;
    order: ${({ order }) => order ?? 0};

    @media (max-width: 800px) {
      display: none;
    }
  `,
  NavLinkInternal: styled(HashLink)<TemplateProps>`
    color: #fff;
    font-size: ${({ fSize }) => fSize ?? "25px"};
    text-decoration: none;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; /* Optionally, if you want to center vertically as well */

    &:hover {
      background: none;
      color: #ccc;
      transition: 0.5s ease-out;
    }

    &::before {
      content: attr(hoverTitle);
      display: block;
      visibility: hidden;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px;
      background-color: #333;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      visibility: visible;
      opacity: 1;
    }
  `,
  ErrorSection: styled.div`
    font-size: 25px;
    padding: 20px;
  `,
  NavLinkInternal2: styled.div`
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    padding: 20px;
    position: relative;
  `,
  OpenLinksButton: styled.button<OpenLinksButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; /* Adjust width as needed */
    height: 45px; /* Adjust height as needed */
    position: fixed;
    top: 10px; /* Adjust top position as needed */
    right: 10px; /* Adjust right position as needed */
    background: none;
    border: none;
    color: ${({ collapse }) =>
      collapse ? "red" : "#ccc"}; /* Change color conditionally */
    font-size: 2rem; /* Adjust font size as needed */
    cursor: pointer;

    @media screen and (min-width: 800px) {
      display: none;
    }
  `,
  NavbarCollapseContainer: styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 20px; /* Adjust padding as needed */
    height: 100vh; /* Adjust height to fill the viewport */
    opacity: 0; /* Start with opacity 0 */
    transition: opacity 0.5s ease; /* Add transition for smooth opacity change */

    @media (max-width: 900px) {
      display: flex;
      z-index: 1;
      width: 100%;
      opacity: 0.9; /* Set initial opacity */
      background-color: #ccc;
    }
  `,
};

export const Button = styled.button`
  border: none;
  background: none;
  color: #fff;
  z-index: 5;
  text-align: center;
  font-size: 25px;
`;

export const DropdownMenuContainer = styled.div`
  display: block;
  margin: 20px;
  text-align: center;
`;

export default NavbarStyle;
