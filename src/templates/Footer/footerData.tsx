import { ReactNode, createElement } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import mamanLink from "/assets/maman-logo.png";
import swissportLink from "/assets/swissport-logo.png";

export interface ExternalLinksInfo {
  src?: ReactNode;
  href?: string;
}

export const externalLinks = new Map<string, ExternalLinksInfo>([
  [
    "maman",
    {
      src: <img style={{ width: "150px" }} src={mamanLink} alt="maman-logo" />,
      href: "https://mamanonline.maman.co.il/",
    },
  ],
  [
    "swissport",
    {
      src: (
        <img
          style={{ width: "150px" }}
          src={swissportLink}
          alt="swissport-logo"
        />
      ),
      href: "https://www.swissport.co.il/heb/Main/",
    },
  ],
]);

interface IconInfo {
  tag: ReactNode;
  href: string;
}

export const icons = new Map<string, IconInfo>([
  ["youtube", { tag: createElement(FaYoutube), href: "/" }],
  ["facebook", { tag: createElement(FaFacebook), href: "/" }],
  ["instagram", { tag: createElement(FaInstagram), href: "/" }],
  ["test", { tag: createElement(FaInstagram), href: "/" }],
]);

export const payload = new Map([
  [
    "menu",
    {
      links: [
        { path: "about us", to: "/about-us" },
        { path: "login", to: "/login" },
      ],
    },
  ],
  [
    "airlines",
    {
      links: [
        { path: "maman", to: "/maman-airlines" },
        { path: "swissport", to: "/swissport-airlines" },
      ],
    },
  ],
  [
    "agents",
    {
      links: [
        { path: "a.d", to: "/" },
        { path: "air logistics", to: "/" },
        { path: "british airways", to: "/" },
        { path: "el al", to: "/" },
        { path: "globspeed", to: "/" },
        { path: "wta", to: "/" },
      ],
    },
  ],
  [
    "departments",
    {
      links: [
        { path: "import", to: "/" },
        { path: "export", to: "/" },
        { path: "pharma", to: "/" },
        { path: "aviation", to: "/" },
        { path: "transportation", to: "/" },
      ],
    },
  ],
  [
    "users",
    {
      links: [
        { path: "administrators", to: "/" },
        { path: "employee", to: "/" },
      ],
    },
  ],
]);

export const copyright = (key: string, value: string) => {
  const testData = new Map([[key, value]]);
  return testData.get(key);
};
