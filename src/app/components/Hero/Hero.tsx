import React from 'react';
import styles from './Hero.module.scss';
import Button from '@/app/components/ui/Button/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div
          className={`${styles.hero__inner} flex flex-col justify-center items-start`}
        >
          <div className={styles.hero__block}>
            <h1 className={`${styles.hero__title} title`}>
              Hi, I&apos;m Vitali <br />
              Frontend Developer
            </h1>
            <p className={styles.hero__desc}>
              Transforming ideas into interactive, <br />
              high-performance web solutions.
            </p>

            <div className={`${styles.hero__actions} flex items-center`}>
              <Button
                className={`${styles.hero__btn}`}
                variant="primary"
                size={'large'}
                as="a"
                href="files/cv/Vitali Lavau [Frontend Developer][Русский].pdf"
                download
              >
                Download CV
              </Button>

              <Button className={`${styles.hero__btn}`} variant="secondary">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hero__bg}></div>
    </section>
  );
}
