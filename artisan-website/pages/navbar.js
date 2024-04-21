'use client';

import styles from "../styles/style.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a>Image here</a>
        <h1>Colours of the Warp</h1>
      </div>
      <div className={styles.navbuttoncontainer}>
        <Link href="/">
          <button className={styles.navbutton}>Christian Tervo</button>
        </Link>
        <Link href="/portfolio">
          <button className={styles.navbutton}>Portfolio</button>
        </Link>
        <Link href="/about">
          <button className={styles.navbutton}>About</button>
        </Link>
      </div>
      <span className={styles.line}></span>
    </nav>
  );
}