import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import TemplateProps from "../TemplateProps";

const NavbarStyle = {
  Wrapper: styled.div<TemplateProps>`
    grid-area: ${({ gArea }) => gArea ?? "nav"};
    background: ${({ bgc }) => bgc ?? "var(--accent-color)"};
    padding: ${({ p }) => p ?? "0rem"};
    border-bottom: ${({ pt, theme }) =>
      pt ?? `1px solid ${"var(--secondary-color)" ?? theme}`};
  `,
  InnerContainer: styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
  `,
  LeftContainer: styled.div`
    display: flex;
    order: 0;

    @media (max-width: 800px) {
      display: none;
    }
  `,
  RightContainer: styled.div`
    display: flex;
    order: 1;

    @media (max-width: 800px) {
      display: none;
    }
  `,
};

export const NavbarLinkInternal = styled(HashLink)`
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  margin: 20px;
  &:hover {
    background: none;
    color: #fff;
    transition: 0.5s ease-out;
  }
`;

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
