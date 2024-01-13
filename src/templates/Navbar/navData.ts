import { createElement, ReactNode } from 'react';

interface UserNavEntry {
  role: string;
  path: string;
}

type GeneralNavType = Map<string, string>;
export type UserNavType = Map<string | ReactNode, UserNavEntry>;
type GuestNavType = Map<string, string>;

export const generalNav: GeneralNavType = new Map([
  ['Home', '/'],
  ['About', '/about'],
  ['Cards', '/#cards'],
]);

export const userNav = (): UserNavType => {
  const mapEntries: Array<[string, UserNavEntry]> = [
    ['emplyee', { role: 'emplyee', path: '/dashboard' }],
    ['admin', { role: 'admin', path: '/admin-dashboard' }],
  ];

  return new Map<string, UserNavEntry>(mapEntries);
};


export const guestNav: GuestNavType = new Map([
  ['Signup', '/signup'],
  ['Login', '/login'],
]);