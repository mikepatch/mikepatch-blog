import React from 'react';
import Link from 'next/link';

import styles from './logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.link}>
      <span>Mike</span>
      <span>Patch</span>
    </Link>
  );
}
