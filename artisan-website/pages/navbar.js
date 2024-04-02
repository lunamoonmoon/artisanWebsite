'use client';

import styles from "../styles/style.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <a>Image here</a>
      </div>
      <div className="nav-buttons">
        <Link href="/">Christian Tervo</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}