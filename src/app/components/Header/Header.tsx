import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/app/components/Header/Navigation/Navigation';
import LanguageSwitcher from '@/app/components/Header/LanguageSwitcher/LanguageSwitcher';
import Button from '@/app/components/ui/Button/Button';
import MobileMenu from '@/app/components/Header/MobileMenu/MobileMenu';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className={`${styles.header__inner} flex items-center`}>
          <Link className={`${styles.header__logo}`} href="/">
            <Image
              className={styles.logo}
              src="/images/logo.svg"
              alt="logo"
              width={136}
              height={48}
              priority
            />
          </Link>
          <Navigation className={styles.header__nav} />
          <LanguageSwitcher className={styles.header__lang} />
          <Button
            className={`${styles.header__btn}`}
            variant="ghost"
            size={'small'}
            as="a"
            href="files/cv/Vitali Lavau [Frontend Developer][Русский].pdf"
            download
          >
            Download CV
          </Button>

          <div className="md:hidden">
            <MobileMenu className={`${styles.header__mobile}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
