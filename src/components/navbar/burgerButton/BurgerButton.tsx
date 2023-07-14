import React from 'react';
import cn from 'classnames';

import styles from './burgerButton.module.scss';

type BurgerButtonProps = {
  isOpen: boolean;
  toggleNav: () => void;
};

export default function BurgerButton({ isOpen, toggleNav }: BurgerButtonProps) {

  return (
    <button
      className={cn(styles.burgerButton, {
        [styles.active]: isOpen,
      })}
      onClick={() => toggleNav()}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
