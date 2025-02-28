import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  as?: 'a' | 'button';
  href?: string;
  download?: boolean;
};

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'large',
  disabled = false,
  as = 'button',
  href,
  download,
  ...rest
}: ButtonProps) {
  const buttonClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`;

  if (as === 'a' && href) {
    return (
      <a className={buttonClassName} href={href} download={download} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
