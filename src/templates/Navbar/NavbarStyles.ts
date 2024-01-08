import styled from 'styled-components';
import { color } from '../../styles/colors';
import { HashLink } from 'react-router-hash-link';

const { primary, text1, text2 } = color;

export const NavbarContainer = styled.nav`
  background: ${primary};
  grid-area: nav;
  padding: 0rem;
  color: ${text1};
  border-bottom: 2px solid ${text1}; /* Fix the typo here */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  `;

export const LeftContainer = styled.div`
flex: 70%;
display: flex;
padding-left: 5%;

@media (max-width: 800px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 0px;
	min-height: 100vh;
	@media screen and (max-width: 960px) {
		padding: 0 10px;
	}
`;

export const NavbarLinkInternal = styled(HashLink)`
  color: ${text1};
  font-size: 25px;
  text-decoration: none;
  margin: 20px;
  &:hover {
    background: none;
    color: ${text2};
    transition: 0.5s ease-out;
  }
  `;

export const RightContainer = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 5%;

  @media (max-width: 900px) {
    display: none;
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