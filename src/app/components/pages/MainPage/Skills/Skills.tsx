'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Skills.module.scss';
import Button from '@/app/components/ui/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', logo: '/images/mainPage/skills/js.svg' },
  { name: 'TypeScript', logo: '/images/mainPage/skills/ts.svg' },
  { name: 'Vue 3', logo: '/images/mainPage/skills/vue.svg' },
  { name: 'Nuxt 3', logo: '/images/mainPage/skills/nuxt.svg' },
  { name: 'React', logo: '/images/mainPage/skills/react.svg' },
  { name: 'Pinia', logo: '/images/mainPage/skills/pinia.svg' },
  { name: 'jQuery', logo: '/images/mainPage/skills/jquery.svg' },
  { name: 'HTML', logo: '/images/mainPage/skills/html.svg' },
  { name: 'CSS', logo: '/images/mainPage/skills/css.svg' },
  { name: 'Tailwind CSS', logo: '/images/mainPage/skills/tailwind.svg' },
];

export default function Skills() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      typeof swiperRef.current.params.navigation === 'object'
    ) {
      const navigationParams = swiperRef.current.params.navigation;
      navigationParams.prevEl = prevRef.current;
      navigationParams.nextEl = nextRef.current;
      swiperRef.current.navigation?.init();
      swiperRef.current.navigation?.update();
    }
  }, []);

  return (
    <section className={`${styles.skills} section`}>
      <div className="container">
        <div className={styles.skills__inner}>
          <h2 className={`${styles.skills__title} title-h2`}>
            Skills & Technologies
          </h2>

          <div
            className={`${styles.skills__slider} flex items-center justify-center`}
          >
            <div
              ref={prevRef}
              className={`${styles['skills__slider-btn']} ${styles['skills__slider-btn--prev']}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M37.5 45L22.5 30L37.5 15"
                  stroke="#eaeaea"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Swiper
              modules={[Navigation]}
              speed={600}
              slidesPerView={2}
              spaceBetween={8}
              loop={true}
              className={styles['skills__slider-container']}
              onInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                1280: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
            >
              {skills.map((skill) => (
                <SwiperSlide
                  key={skill.name}
                  className={styles['skills__slider-item']}
                >
                  <div className={styles['skills__slider-block']}>
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      className={`${styles['skills__slider-img']} img-responsive`}
                      width={64}
                      height={64}
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              ref={nextRef}
              className={`${styles['skills__slider-btn']} ${styles['skills__slider-btn--next']}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M22.5 45L37.5 30L22.5 15"
                  stroke="#eaeaea"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <Button
            as="a"
            href="/skills"
            className={`${styles.skills__btn}`}
            variant="secondary"
          >
            View Skills
          </Button>
        </div>
      </div>
    </section>
  );
}
