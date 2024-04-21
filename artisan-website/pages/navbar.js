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
      </div>
      <div className={styles.navbuttoncontainer}>
        <Link href="/" className={styles.navbutton}>Christian Tervo</Link>
        <Link href="/portfolio" className={styles.navbutton}>Portfolio</Link>
        <Link href="/about" className={styles.navbutton}>About</Link>
      </div>
    </nav>
  );
}