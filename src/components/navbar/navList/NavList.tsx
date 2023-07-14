import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './navList.module.scss';
import { NavLink } from '@/types';

type NavListProps = {
  isOpen: boolean;
  variant: string;
  closeNav: () => void;
};

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'blog', label: 'Blog', path: '/blog' },
  { id: 'about', label: 'About', path: '/about' },
];

export default function NavList({ isOpen, variant, closeNav }: NavListProps) {
  const navItems = navLinks.map((navLink) => (
    <li key={navLink.id}>
      <Link href={navLink.path} onClick={closeNav}>
        {navLink.label}
      </Link>
    </li>
  ));

  const listStyles =
    variant === 'desktop'
      ? styles.desktop
      : cn(styles.mobile, {
          [styles.active]: isOpen,
        });

  return <ul className={listStyles}>{navItems}</ul>;
}
