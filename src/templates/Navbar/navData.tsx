import { FaHome, FaQuestion } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";

export const roleNavigation = new Map([
  [
    "Admin dashborad",
    { name: FaHome, link: "/", title: "dashborad", roles: ["admin"] },
  ],
  [
    "profile",
    {
      name: BiSolidUserDetail,
      link: "/",
      title: "profile",
      roles: ["employee", "admin", "superAdmin"],
    },
  ],
]);

export const generalNavigation = new Map([
  ["home", { name: FaHome, link: "/", title: "Home" }],
  ["about", { name: FaQuestion, link: "/", title: "About us" }],
  [
    "maman",
    {
      name: "maman",
      link: "/",
      title: "maman",
    },
  ],
  [
    "swissport",
    {
      name: "swissport",
      link: "/",
      title: "swissport",
    },
  ],
]);

export const userNavigation: Map<string, { role: string; path: string }> =
  new Map([
    ["employee", { role: "employee", path: "/dashboard" }],
    ["employee1", { role: "employee", path: "/dashboard" }],
    ["admin", { role: "admin", path: "/admin-dashboard" }],
  ]);

export const guestNav = new Map([
  ["Signup", "/signup"],
  ["Login", "/login"],
]);
