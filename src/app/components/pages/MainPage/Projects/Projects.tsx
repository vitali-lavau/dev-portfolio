import React from 'react';
import styles from './Projects.module.scss';
import Button from '@/app/components/ui/Button/Button';
import Image from 'next/image';

const projects = [
  {
    name: 'МедЭстет Клиник',
    description:
      'Developed the entire frontend for the Medestet Clinic website using JavaScript, jQuery, WordPress, PHP, ' +
      'HTML, and CSS. The project involved creating a responsive and visually appealing medical services site ' +
      'that meets client specifications, ensuring smooth user interactions and a modern web experience.',
    image: '/images/mainPage/projects/projects_img-1.jpg',
    technologies: 'JavaScript, jQuery, WordPress, PHP, HTML, CSS',
  },
  {
    name: 'TAURUS INVESTMENT GROUP',
    description:
      'Developed the entire frontend for the Taurus Investment Group website using JavaScript, GSAP, HTML, and CSS. ' +
      'The project involved creating a responsive and visually appealing corporate site that meets ' +
      'client specifications, ensuring smooth user interactions and a modern web experience.',
    image: '/images/mainPage/projects/projects_img-2.jpg',
    technologies: 'JavaScript, GSAP, HTML, CSS',
  },
  {
    name: 'Интернет-магазин цветов ',
    description:
      'Developed the entire frontend for the Rose website using JavaScript, HTML, and CSS. ' +
      'The project involved creating a responsive and visually appealing corporate site that meets ' +
      'client specifications, ensuring smooth user interactions and a modern web experience.',
    image: '/images/mainPage/projects/projects_img-3.jpg',
    technologies: 'JavaScript, HTML, CSS',
  },
];

export default function Projects() {
  return (
    <section className={`${styles.projects} section`}>
      <div className="container">
        <div className={styles.projects__inner}>
          <h2 className={`${styles.projects__title} title-h2`}>Projects</h2>

          <div className={`${styles.projects__list} flex flex-wrap`}>
            {projects.map((project) => (
              <div
                key={project.name}
                className={`${styles.projects__item} flex flex-col`}
              >
                <div className={styles['projects__item-img']}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="img-responsive"
                    width={360}
                    height={180}
                    priority
                  />
                </div>

                <div
                  className={`${styles['projects__item-inner']} flex flex-col`}
                >
                  <h4 className={styles['projects__item-title']}>
                    {project.name}
                  </h4>
                  <p className={styles['projects__item-description']}>
                    {project.description}
                  </p>
                  <p className={styles['projects__item-technologies']}>
                    Technologies: {project.technologies}
                  </p>

                  <div
                    className={`${styles['projects__item-actions']} flex items-center`}
                  >
                    <Button
                      size={'small'}
                      className={styles['projects__item-btn']}
                    >
                      View Live
                    </Button>
                    <Button
                      size={'small'}
                      className={styles['projects__item-btn']}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button as="a" href="/projects" className={styles.projects__btn}>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
