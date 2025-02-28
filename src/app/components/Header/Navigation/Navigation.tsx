'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

type NavigationProps = {
  className?: string;
};

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`${className}`}>
      <ul className={`flex items-center`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href} className={styles.nav__item}>
            <Link
              className={`${styles.nav__link} ${pathname === link.href ? styles.active : ''} inline-block relative uppercase font-medium`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
