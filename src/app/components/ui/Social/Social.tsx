import styles from './Social.module.scss';
import Link from 'next/link';

type SocialProps = {
  className?: string;
};

export default function Social({ className }: SocialProps) {
  return (
    <ul className={`${styles.social} ${className} flex items-center`}>
      <li className={styles.social__item}>
        <Link href="/" className={styles.social__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.stroke}
          >
            <path
              d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18C4.49 20 4 16 2 16"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
      <li className={styles.social__item}>
        <Link href="/" className={styles.social__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.fill}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.37499 9.6352C6.74332 7.29603 10.3233 5.75436 12.115 5.00936C17.2292 2.88186 18.2917 2.5127 18.985 2.5002C19.1367 2.49686 19.4775 2.53436 19.6983 2.71353C19.8842 2.8652 19.9358 3.06936 19.96 3.2127C19.985 3.35603 20.015 3.68186 19.9908 3.9377C19.7142 6.84936 18.515 13.916 17.905 17.1777C17.6467 18.5577 17.1383 19.0202 16.6467 19.066C15.5767 19.1644 14.7642 18.3594 13.7283 17.6802C12.1075 16.6177 11.1925 15.956 9.61915 14.9194C7.80082 13.721 8.97916 13.0627 10.0158 11.986C10.2867 11.7044 14.9992 7.41853 15.09 7.02937C15.1017 6.98103 15.1117 6.8002 15.0042 6.70436C14.8958 6.60853 14.7375 6.64103 14.6233 6.66686C14.46 6.70436 11.8708 8.41603 6.85499 11.8019C6.11999 12.306 5.45415 12.5519 4.85749 12.5394C4.19999 12.5252 2.93499 12.1677 1.99499 11.8619C0.841655 11.4869 -0.0750116 11.2885 0.00498842 10.6519C0.0466551 10.3202 0.503322 9.98103 1.37499 9.6352Z"
              fill="#EAEAEA"
            />
          </svg>
        </Link>
      </li>
      <li className={styles.social__item}>
        <Link href="/" className={styles.social__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.stroke}
          >
            <path
              d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
      <li className={styles.social__item}>
        <Link href="/" className={styles.social__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.stroke}
          >
            <path
              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 9H2V21H6V9Z"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
              stroke="#EAEAEA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
}
