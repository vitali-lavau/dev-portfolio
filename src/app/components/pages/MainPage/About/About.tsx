import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <section className={`${styles.about} section`}>
      <div className="container">
        <div className={`${styles.about__inner} flex flex-wrap`}>
          <div className={styles.about__col}>
            <div className={styles.about__block}>
              <h2 className={`${styles.about__title} title-h2`}>About Me</h2>
              <p className={styles.about__description}>
                I’m Vitali, a frontend developer passionate about building
                interactive and high-performance web applications. I focus on
                crafting modern UI/UX solutions using JavaScript, TypeScript,
                and cutting-edge frameworks.
              </p>

              <div className={`${styles.about__row} flex flex-wrap`}>
                <div
                  className={`${styles.about__item} flex flex-col items-center text-center`}
                >
                  <div className={styles[`about__item-img`]}>
                    <Image
                      src="/images/mainPage/about/speed_optimization.svg"
                      alt="Image"
                      className="img-responsive"
                      priority
                      width={200}
                      height={100}
                    />
                  </div>

                  <div className={styles['about__item-inner']}>
                    <div className={styles['about__item-text']}>
                      Making web apps fast and responsive
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ Load time optimization, Web Vitals
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ Google Lighthouse, efficient code
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.about__item} flex flex-col items-center text-center`}
                >
                  <div className={styles[`about__item-img`]}>
                    <Image
                      src="/images/mainPage/about/instant_interactions.svg"
                      alt="Image"
                      className="img-responsive"
                      priority
                      width={200}
                      height={100}
                    />
                  </div>

                  <div className={styles['about__item-inner']}>
                    <div className={styles['about__item-text']}>
                      Creating applications with real-time updates
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ WebSockets, Socket.IO integration
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ Live chat, notifications, multi-user collab
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.about__item} flex flex-col items-center text-center`}
                >
                  <div className={styles['about__item-img']}>
                    <Image
                      src="/images/mainPage/about/clean_maintainable_code.svg"
                      alt="Image"
                      className="img-responsive"
                      priority
                      width={200}
                      height={100}
                    />
                  </div>

                  <div className={styles['about__item-inner']}>
                    <div className={styles['about__item-text']}>
                      Writing structured and reusable code
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ TypeScript, Vue 3, Nuxt 3, Pinia
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ Scalable architecture for future growth
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.about__item} flex flex-col items-center text-center`}
                >
                  <div className={styles[`about__item-img`]}>
                    <Image
                      src="/images/mainPage/about/motion_animation.svg"
                      alt="Image"
                      className="img-responsive"
                      priority
                      width={200}
                      height={100}
                    />
                  </div>

                  <div className={styles['about__item-inner']}>
                    <div className={styles['about__item-text']}>
                      Adding life to interfaces with animations
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ GSAP, tldraw, smooth transitions
                    </div>
                    <div className={styles['about__item-text']}>
                      ✅ Enhancing UX with micro-interactions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.about__col}>
            <div
              className={`${styles.about__block} ${styles['about__block--img']}`}
            >
              <div className={styles.about__img}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
