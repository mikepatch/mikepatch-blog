'use client';

import React, { useState } from 'react';

import styles from './navbar.module.scss';
import Logo from './logo';
import NavList from './navList';
import BurgerButton from './burgerButton';
import ThemeButton from './themeButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <nav className={styles.wrapper}>
      <Logo />
      <div className={styles.iconWrapper}>
        <ThemeButton />
        <BurgerButton isOpen={isOpen} toggleNav={toggleNav} />
      </div>
      <NavList isOpen={isOpen} variant="desktop" closeNav={closeNav} />
      <NavList isOpen={isOpen} variant="mobile" closeNav={closeNav} />
    </nav>
  );
}
