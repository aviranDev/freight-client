import styled from 'styled-components';
import { color } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
 background: ${color.navyBlue};
 grid-area: footer;
 padding: 0.25rem;
 font-size: 14px; /* Adjust font size as needed */
`;

export const FooterWrapper = styled.div`
 max-width: 1290px;
 margin: 0 auto;
`;

export const FooterGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 justify-content: center;
 align-items: center; 

 @media screen and (max-width: 780px) {
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;
 }
	`;

export const FooterSocialIcon = styled.a`
color: ${color.mintGreen}; /* Text color */
font-size: 20px;
margin: 5px;

&:hover {
  background: none;
  color:${color.steelBlue};
};
`;

export const FooterLink = styled(Link)`
  color:${color.steelBlue};
 text-decoration: none;
 margin-bottom: 0.5rem;

 &:hover {
 background: none;
 color: ${color.lightCoral};
  transition: 0.3s ease - out;
 };
`;

export const FooterLinkTitle = styled.h2`
 margin: 16px;
`;

export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 margin: 16px;
 box-sizing: border-box;
 color:${color.lightCoral};

 @media screen and (max-width: 1000px) {
 align-items: center;
 };
`;

export const Rights = styled.div`
  color: ${color.steelBlue};
 width: 100%;
 font-size: 0.9rem;
 border-top: 1px solid ${color.lightCoral};
 padding: 1rem;
 margin: 2rem 0 0;
`;