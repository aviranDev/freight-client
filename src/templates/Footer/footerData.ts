import { ReactNode, createElement } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface IconInfo {
  tag: ReactNode;
  href: string;
}

export const icons = new Map<string, IconInfo>([
  ["linkedin", {
    tag: createElement(FaLinkedin), href: "https://www.linkedin.com/feed/"
  }],
  ["twitter", { tag: createElement(FaTwitter), href: "/" }],
  ["youtube", { tag: createElement(FaYoutube), href: "/" }],
  ["facebook", { tag: createElement(FaFacebook), href: "/" }],
  ["instagram", { tag: createElement(FaInstagram), href: "/" }],
]);

export const payload = new Map(
  [
    ['TITLE 1', {
      sub: [
        { path: 'TEXT 1', to: '/' },
        { path: 'TEXT 2', to: '/' },
        { path: 'TEXT 3', to: '/' }
      ]
    }],
    ['TITLE 2', {
      sub: [
        { path: 'TEXT 4', to: '/' },
        { path: 'TEXT 5', to: '/' },
        { path: 'TEXT 6', to: '/' }
      ]
    }
    ],
    ['TITLE 3', {
      sub: [
        { path: 'TEXT 7', to: '/' },
        { path: 'TEXT 8', to: '/' },
        { path: 'TEXT 9', to: '/' }
      ]
    }],
  ]
);

export const addData = (key: string, value: string) => {
  const testData = new Map([[key, value]]);
  return testData.get(key);
};