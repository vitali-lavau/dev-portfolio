'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './MobileMenu.module.scss';

type MobileMenuProps = {
  className?: string;
};

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT' },
];

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} ${styles.mobileMenu} `}>
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <nav className={styles.menu}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className={`${pathname === link.href ? styles.active : ''}`}
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
