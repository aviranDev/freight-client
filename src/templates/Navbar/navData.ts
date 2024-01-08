import { createElement, ReactNode } from 'react';
import { IoHeart } from 'react-icons/io5';

interface UserNavEntry {
  roles: string[];
  path: string;
}

type GeneralNavType = Map<string, string>;
type UserNavType = Map<string | ReactNode, UserNavEntry>;
type GuestNavType = Map<string, string>;

export const generalNav: GeneralNavType = new Map([
  ['Home', '/'],
  ['About', '/about'],
  ['Cards', '/#cards'],
]);

export const userNav = (arr: ReactNode[]): UserNavType => {
  const mapEntries: Array<[string | ReactNode, UserNavEntry]> = [
    [
      arr.length
        ? createElement(IoHeart, { color: 'red', size: 30 })
        : createElement(IoHeart, { size: 30 }),
      { roles: ['user', 'business'], path: '/favorites' },
    ],
    ['Dashboard', { roles: ['business'], path: '/dashboard' }],
    ['Admin', { roles: ['admin'], path: '/admin-dashboard' }],
  ];

  return new Map<string | ReactNode, UserNavEntry>(mapEntries);
};

export const guestNav: GuestNavType = new Map([
  ['Signup', '/signup'],
  ['Login', '/login'],
]);