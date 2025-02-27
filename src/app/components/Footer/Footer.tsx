import styles from './Footer.module.scss';
import Social from '@/app/components/ui/Social/Social';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div
          className={`${styles.footer__inner} flex items-center justify-between`}
        >
          <Social className={styles.footer__social} />
          <div className={styles.footer__copyright}>
            © 2025 Designed & Developed by Vitali Lavau
          </div>
        </div>
      </div>
    </footer>
  );
}
