import { FaHome, FaQuestion } from "react-icons/fa";



export type GeneralNavType = Map<string, {
  name: React.FC | string;
  link: string
  title: string
}>;
type GuestNavType = Map<string, string>;

export const generalNav: GeneralNavType = new Map([
  ['home', { name: FaHome, link: '/', title: "Home" }],
  ['about', { name: FaQuestion, link: '/', title: 'About us' }],
]);

export const userNav: Map<string, { role: string; path: string; }> = new Map([
  ['employee', { role: 'employee', path: '/dashboard' }],
  ['employee1', { role: 'employee', path: '/dashboard' }],
  ['admin', { role: 'admin', path: '/admin-dashboard' }],
]);


export const guestNav: GuestNavType = new Map([
  ['Signup', '/signup'],
  ['Login', '/login'],
]);